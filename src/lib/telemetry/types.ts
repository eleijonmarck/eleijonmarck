export interface StoredSpan {
  traceId: string;
  spanId: string;
  parentSpanId?: string;
  name: string;
  kind: number;
  startTime: number;
  endTime: number;
  attributes: Record<string, any>;
  events: Array<any>;
  status: { code: number };
}

export interface TraceMetrics {
  totalTraces: number;
  avgPageLoad: number;
  lcpP95: number;
  clsValue: number;
}

export interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}
