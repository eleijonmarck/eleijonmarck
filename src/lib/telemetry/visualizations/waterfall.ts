import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import type { StoredSpan } from '../types';

export function renderWaterfall(spans: StoredSpan[], container: HTMLElement) {
  container.innerHTML = '';

  if (spans.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666; padding: 2em;">No spans to display</p>';
    return;
  }

  const sortedSpans = [...spans].sort((a, b) => a.startTime - b.startTime);

  const startTime = Math.min(...sortedSpans.map(s => s.startTime));
  const endTime = Math.max(...sortedSpans.map(s => s.endTime));
  const totalDuration = endTime - startTime;

  const width = container.clientWidth;
  const barHeight = 30;
  const height = sortedSpans.length * (barHeight + 10);
  const leftMargin = 200;
  const rightMargin = 100;

  const xScale = scaleLinear()
    .domain([0, totalDuration])
    .range([leftMargin, width - rightMargin]);

  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('font-family', 'var(--font-family-sans, sans-serif)');

  const spanGroups = svg.selectAll('g')
    .data(sortedSpans)
    .enter()
    .append('g')
    .attr('transform', (_, i) => `translate(0, ${i * (barHeight + 10)})`);

  spanGroups.append('text')
    .attr('x', 5)
    .attr('y', barHeight / 2 + 5)
    .text(d => {
      const name = d.name.length > 25 ? d.name.substring(0, 25) + '...' : d.name;
      return name;
    })
    .style('font-size', '12px')
    .style('fill', '#333');

  spanGroups.append('rect')
    .attr('x', d => xScale(d.startTime - startTime))
    .attr('y', 0)
    .attr('width', d => Math.max(3, xScale(d.endTime - d.startTime)))
    .attr('height', barHeight)
    .attr('fill', d => getColorBySpanKind(d.kind))
    .attr('rx', 4)
    .style('cursor', 'pointer')
    .on('click', (event, d) => {
      showSpanDetails(d, event);
    });

  spanGroups.append('text')
    .attr('x', d => xScale(d.startTime - startTime) + xScale(d.endTime - d.startTime) + 5)
    .attr('y', barHeight / 2 + 5)
    .text(d => `${(d.endTime - d.startTime).toFixed(2)}ms`)
    .style('font-size', '11px')
    .style('fill', '#666');
}

function getColorBySpanKind(kind: number): string {
  const colors: Record<number, string> = {
    0: '#4285f4', // INTERNAL
    1: '#ea4335', // SERVER
    2: '#fbbc04', // CLIENT
    3: '#34a853', // PRODUCER
    4: '#ff6d00'  // CONSUMER
  };
  return colors[kind] || '#999';
}

function showSpanDetails(span: StoredSpan, event: MouseEvent) {
  const detailsEl = document.getElementById('span-attributes');
  if (!detailsEl) return;

  detailsEl.innerHTML = `
    <div style="padding: 1em; background: #f5f5f5; border-radius: 4px; margin-top: 1em;">
      <h4 style="margin: 0 0 0.5em 0;">Span Details</h4>
      <div style="display: grid; gap: 0.5em; font-size: 0.9em;">
        <div><strong>Name:</strong> ${span.name}</div>
        <div><strong>Trace ID:</strong> <code style="font-size: 0.85em;">${span.traceId}</code></div>
        <div><strong>Span ID:</strong> <code style="font-size: 0.85em;">${span.spanId}</code></div>
        <div><strong>Duration:</strong> ${(span.endTime - span.startTime).toFixed(2)}ms</div>
        <div><strong>Start Time:</strong> ${new Date(span.startTime).toISOString()}</div>
        ${span.parentSpanId ? `<div><strong>Parent ID:</strong> <code style="font-size: 0.85em;">${span.parentSpanId}</code></div>` : ''}
        <div style="margin-top: 0.5em;"><strong>Attributes:</strong></div>
        <pre style="background: white; padding: 0.5em; border-radius: 4px; overflow-x: auto; font-size: 0.85em;">${JSON.stringify(span.attributes, null, 2)}</pre>
      </div>
    </div>
  `;
}
