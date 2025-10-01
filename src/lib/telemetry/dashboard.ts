import { TelemetryStore } from './telemetry-store';
import { renderWaterfall } from './visualizations/waterfall';
import { renderTimeline } from './visualizations/timeline';
import type { StoredSpan } from './types';

let currentTraceId: string | null = null;

export async function initializeDashboard() {
  const store = new TelemetryStore();
  await store.initialize();

  await updateMetrics(store);
  await updateTimeline(store);

  setupEventListeners(store);

  setInterval(() => updateMetrics(store), 10000);
  setInterval(() => updateTimeline(store), 10000);

  console.log('[Dashboard] Initialized');
}

async function updateMetrics(store: TelemetryStore) {
  const metrics = await store.getMetrics();

  const totalTracesEl = document.getElementById('total-traces');
  const avgLoadEl = document.getElementById('avg-load');
  const lcpP95El = document.getElementById('lcp-p95');
  const clsValueEl = document.getElementById('cls-value');

  if (totalTracesEl) totalTracesEl.textContent = metrics.totalTraces.toString();
  if (avgLoadEl) avgLoadEl.textContent = `${metrics.avgPageLoad}ms`;
  if (lcpP95El) lcpP95El.textContent = `${metrics.lcpP95}ms`;
  if (clsValueEl) clsValueEl.textContent = metrics.clsValue.toFixed(3);
}

async function updateTimeline(store: TelemetryStore) {
  const container = document.getElementById('timeline-view');
  if (!container) return;

  const spans = await store.getAllSpans();

  renderTimeline(spans, container, async (traceId: string) => {
    currentTraceId = traceId;
    await showTraceDetails(store, traceId);
  });
}

async function showTraceDetails(store: TelemetryStore, traceId: string) {
  const container = document.getElementById('span-waterfall');
  if (!container) return;

  const traceSpans = await store.getTraceById(traceId);

  const detailSection = document.getElementById('trace-detail');
  if (detailSection) {
    detailSection.style.display = 'block';
  }

  renderWaterfall(traceSpans, container);
}

function setupEventListeners(store: TelemetryStore) {
  const clearBtn = document.getElementById('clear-data');
  if (clearBtn) {
    clearBtn.addEventListener('click', async () => {
      if (confirm('Are you sure you want to clear all telemetry data?')) {
        await store.clearAllData();
        await updateMetrics(store);
        await updateTimeline(store);

        const waterfallContainer = document.getElementById('span-waterfall');
        const attributesContainer = document.getElementById('span-attributes');
        if (waterfallContainer) waterfallContainer.innerHTML = '';
        if (attributesContainer) attributesContainer.innerHTML = '';

        alert('All telemetry data cleared');
      }
    });
  }

  const exportBtn = document.getElementById('export-data');
  if (exportBtn) {
    exportBtn.addEventListener('click', async () => {
      const spans = await store.getAllSpans();
      const dataStr = JSON.stringify(spans, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `telemetry-export-${Date.now()}.json`;
      link.click();

      URL.revokeObjectURL(url);
    });
  }

  const timeRangeSelect = document.getElementById('time-range') as HTMLSelectElement;
  if (timeRangeSelect) {
    timeRangeSelect.addEventListener('change', async () => {
      await updateTimeline(store);
    });
  }
}
