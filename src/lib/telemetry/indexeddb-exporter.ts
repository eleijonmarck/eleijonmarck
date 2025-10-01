import type { SpanExporter, ReadableSpan } from '@opentelemetry/sdk-trace-web';
import type { ExportResult } from '@opentelemetry/core';
import type { StoredSpan } from './types';

export class IndexedDBSpanExporter implements SpanExporter {
  private dbName = 'otel-traces';
  private version = 1;
  private db: IDBDatabase | null = null;

  async export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): Promise<void> {
    try {
      const db = await this.getDB();
      const tx = db.transaction(['spans'], 'readwrite');
      const store = tx.objectStore('spans');

      const promises = spans.map(span => {
        const stored: StoredSpan = {
          traceId: span.spanContext().traceId,
          spanId: span.spanContext().spanId,
          parentSpanId: span.parentSpanId,
          name: span.name,
          kind: span.kind,
          startTime: span.startTime[0] * 1000 + span.startTime[1] / 1000000,
          endTime: span.endTime[0] * 1000 + span.endTime[1] / 1000000,
          attributes: span.attributes,
          events: span.events,
          status: span.status
        };
        return new Promise((resolve, reject) => {
          const request = store.add(stored);
          request.onsuccess = () => resolve(request.result);
          request.onerror = () => reject(request.error);
        });
      });

      await Promise.all(promises);
      resultCallback({ code: 0 });
    } catch (error) {
      console.error('Failed to export spans:', error);
      resultCallback({ code: 1, error: error as Error });
    }
  }

  private async getDB(): Promise<IDBDatabase> {
    if (this.db) return this.db;

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains('spans')) {
          const spanStore = db.createObjectStore('spans', {
            keyPath: 'spanId',
            autoIncrement: false
          });

          spanStore.createIndex('by_time', 'startTime', { unique: false });
          spanStore.createIndex('by_trace', 'traceId', { unique: false });
          spanStore.createIndex('by_name', 'name', { unique: false });
          spanStore.createIndex('by_parent', 'parentSpanId', { unique: false });
        }
      };
    });
  }

  async shutdown(): Promise<void> {
    this.db?.close();
    this.db = null;
  }

  async forceFlush?(): Promise<void> {
    // No-op for IndexedDB exporter
  }
}
