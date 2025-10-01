import type { StoredSpan, TraceMetrics } from './types';

export class TelemetryStore {
  private dbName = 'otel-traces';
  private version = 1;
  private db: IDBDatabase | null = null;

  async initialize(): Promise<void> {
    this.db = await this.openDB();
  }

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }

  async getAllSpans(): Promise<StoredSpan[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(['spans'], 'readonly');
      const store = tx.objectStore('spans');
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async getSpansInRange(startTime: number, endTime: number): Promise<StoredSpan[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(['spans'], 'readonly');
      const store = tx.objectStore('spans');
      const index = store.index('by_time');

      const spans: StoredSpan[] = [];
      const range = IDBKeyRange.bound(startTime, endTime);

      const request = index.openCursor(range);
      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          spans.push(cursor.value);
          cursor.continue();
        } else {
          resolve(spans);
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  async getTraceById(traceId: string): Promise<StoredSpan[]> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(['spans'], 'readonly');
      const store = tx.objectStore('spans');
      const index = store.index('by_trace');

      const spans: StoredSpan[] = [];
      const request = index.openCursor(IDBKeyRange.only(traceId));

      request.onsuccess = (event) => {
        const cursor = (event.target as IDBRequest).result;
        if (cursor) {
          spans.push(cursor.value);
          cursor.continue();
        } else {
          resolve(spans);
        }
      };
      request.onerror = () => reject(request.error);
    });
  }

  async getMetrics(): Promise<TraceMetrics> {
    const spans = await this.getAllSpans();

    const traces = new Map<string, StoredSpan[]>();
    spans.forEach(span => {
      if (!traces.has(span.traceId)) {
        traces.set(span.traceId, []);
      }
      traces.get(span.traceId)!.push(span);
    });

    const durations = Array.from(traces.values()).map(traceSpans => {
      const rootSpan = traceSpans.find(s => !s.parentSpanId);
      if (rootSpan) {
        return rootSpan.endTime - rootSpan.startTime;
      }
      return 0;
    }).filter(d => d > 0);

    const avgPageLoad = durations.length > 0
      ? durations.reduce((a, b) => a + b, 0) / durations.length
      : 0;

    const sorted = [...durations].sort((a, b) => a - b);
    const p95Index = Math.floor(sorted.length * 0.95);
    const lcpP95 = sorted.length > 0 ? sorted[p95Index] : 0;

    return {
      totalTraces: traces.size,
      avgPageLoad: Math.round(avgPageLoad),
      lcpP95: Math.round(lcpP95),
      clsValue: 0
    };
  }

  async clearAllData(): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(['spans'], 'readwrite');
      const store = tx.objectStore('spans');
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async pruneOldTraces(retentionDays: number = 7): Promise<void> {
    const cutoffTime = Date.now() - (retentionDays * 24 * 60 * 60 * 1000);
    const oldSpans = await this.getSpansInRange(0, cutoffTime);

    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const tx = this.db!.transaction(['spans'], 'readwrite');
      const store = tx.objectStore('spans');

      oldSpans.forEach(span => {
        store.delete(span.spanId);
      });

      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }
}
