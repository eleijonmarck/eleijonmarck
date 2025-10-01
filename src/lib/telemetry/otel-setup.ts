import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-web';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
import { XMLHttpRequestInstrumentation } from '@opentelemetry/instrumentation-xml-http-request';
import { UserInteractionInstrumentation } from '@opentelemetry/instrumentation-user-interaction';
import { Resource } from '@opentelemetry/resources';
import { IndexedDBSpanExporter } from './indexeddb-exporter';

let initialized = false;

export function initializeTelemetry() {
  if (initialized) return;
  initialized = true;

  const resource = new Resource({
    'service.name': 'eleijonmarck-portfolio',
    'service.version': '1.0.0',
    'deployment.environment': import.meta.env.MODE || 'production'
  });

  const provider = new WebTracerProvider({
    resource
  });

  const exporter = new IndexedDBSpanExporter();

  provider.addSpanProcessor(
    new BatchSpanProcessor(exporter, {
      maxQueueSize: 2048,
      maxExportBatchSize: 512,
      scheduledDelayMillis: 5000,
      exportTimeoutMillis: 30000
    })
  );

  provider.register({
    contextManager: new ZoneContextManager()
  });

  registerInstrumentations({
    instrumentations: [
      new DocumentLoadInstrumentation(),
      new FetchInstrumentation({
        propagateTraceHeaderCorsUrls: [/.+/],
        clearTimingResources: true
      }),
      new XMLHttpRequestInstrumentation({
        propagateTraceHeaderCorsUrls: [/.+/]
      }),
      new UserInteractionInstrumentation({
        eventNames: ['click', 'submit']
      })
    ]
  });

  console.log('[Telemetry] OpenTelemetry initialized');
}
