import { onCLS, onFID, onLCP, onFCP, onINP, onTTFB } from 'web-vitals';
import { trace } from '@opentelemetry/api';

export function instrumentWebVitals() {
  const tracer = trace.getTracer('web-vitals');

  onLCP((metric) => {
    const span = tracer.startSpan('web.vital.lcp', {
      startTime: metric.entries[0]?.startTime || 0,
      attributes: {
        'web.vital.name': 'LCP',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end((metric.entries[0]?.startTime || 0) + metric.value);
  });

  onFCP((metric) => {
    const span = tracer.startSpan('web.vital.fcp', {
      startTime: metric.entries[0]?.startTime || 0,
      attributes: {
        'web.vital.name': 'FCP',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end((metric.entries[0]?.startTime || 0) + metric.value);
  });

  onCLS((metric) => {
    const span = tracer.startSpan('web.vital.cls', {
      attributes: {
        'web.vital.name': 'CLS',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end();
  });

  onFID((metric) => {
    const span = tracer.startSpan('web.vital.fid', {
      startTime: metric.entries[0]?.startTime || 0,
      attributes: {
        'web.vital.name': 'FID',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end((metric.entries[0]?.startTime || 0) + metric.value);
  });

  onINP((metric) => {
    const span = tracer.startSpan('web.vital.inp', {
      attributes: {
        'web.vital.name': 'INP',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end();
  });

  onTTFB((metric) => {
    const span = tracer.startSpan('web.vital.ttfb', {
      startTime: 0,
      attributes: {
        'web.vital.name': 'TTFB',
        'web.vital.value': metric.value,
        'web.vital.rating': metric.rating,
        'web.vital.delta': metric.delta,
        'web.vital.id': metric.id
      }
    });
    span.end(metric.value);
  });

  console.log('[Telemetry] Web Vitals instrumentation initialized');
}

export function captureNavigationTiming() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!perfData) return;

    const tracer = trace.getTracer('navigation');
    const navigationSpan = tracer.startSpan('navigation.page_load', {
      startTime: perfData.fetchStart,
      attributes: {
        'navigation.type': perfData.type,
        'http.url': perfData.name,
        'timing.dns_lookup': perfData.domainLookupEnd - perfData.domainLookupStart,
        'timing.tcp_connect': perfData.connectEnd - perfData.connectStart,
        'timing.request': perfData.responseStart - perfData.requestStart,
        'timing.response': perfData.responseEnd - perfData.responseStart,
        'timing.dom_processing': perfData.domComplete - perfData.domInteractive,
        'timing.onload': perfData.loadEventEnd - perfData.loadEventStart
      }
    });
    navigationSpan.end(perfData.loadEventEnd);
  });
}
