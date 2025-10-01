import { scaleTime, scaleLinear } from 'd3-scale';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';
import type { StoredSpan } from '../types';

export function renderTimeline(spans: StoredSpan[], container: HTMLElement, onTraceClick: (traceId: string) => void) {
  container.innerHTML = '';

  if (spans.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #666; padding: 2em;">No traces to display. Navigate the site to generate telemetry data.</p>';
    return;
  }

  const traces = new Map<string, StoredSpan[]>();
  spans.forEach(span => {
    if (!traces.has(span.traceId)) {
      traces.set(span.traceId, []);
    }
    traces.get(span.traceId)!.push(span);
  });

  const traceData = Array.from(traces.entries()).map(([traceId, traceSpans]) => {
    const rootSpan = traceSpans.find(s => !s.parentSpanId) || traceSpans[0];
    return {
      traceId,
      startTime: rootSpan.startTime,
      endTime: rootSpan.endTime,
      duration: rootSpan.endTime - rootSpan.startTime,
      name: rootSpan.name
    };
  }).sort((a, b) => a.startTime - b.startTime);

  const width = container.clientWidth;
  const height = 200;
  const margin = { top: 20, right: 20, bottom: 40, left: 20 };

  const xScale = scaleTime()
    .domain([
      new Date(Math.min(...traceData.map(t => t.startTime))),
      new Date(Math.max(...traceData.map(t => t.endTime)))
    ])
    .range([margin.left, width - margin.right]);

  const yScale = scaleLinear()
    .domain([0, Math.max(...traceData.map(t => t.duration))])
    .range([height - margin.bottom, margin.top]);

  const svg = select(container)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('font-family', 'var(--font-family-sans, sans-serif)');

  svg.append('g')
    .attr('transform', `translate(0, ${height - margin.bottom})`)
    .call(axisBottom(xScale).ticks(6))
    .style('font-size', '11px')
    .style('color', '#333')
    .selectAll('text')
    .style('fill', '#333');

  svg.selectAll('.domain, .tick line')
    .style('stroke', '#999');

  svg.selectAll('circle')
    .data(traceData)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(new Date(d.startTime)))
    .attr('cy', d => yScale(d.duration))
    .attr('r', 5)
    .attr('fill', '#0066cc')
    .attr('opacity', 0.7)
    .style('cursor', 'pointer')
    .on('mouseover', function(event, d) {
      select(this)
        .attr('r', 7)
        .attr('opacity', 1);

      const tooltip = svg.append('g')
        .attr('class', 'tooltip')
        .attr('transform', `translate(${xScale(new Date(d.startTime))}, ${yScale(d.duration) - 15})`);

      tooltip.append('text')
        .attr('text-anchor', 'middle')
        .attr('y', -5)
        .style('font-size', '12px')
        .style('fill', '#333')
        .text(`${d.name} (${d.duration.toFixed(0)}ms)`);
    })
    .on('mouseout', function() {
      select(this)
        .attr('r', 5)
        .attr('opacity', 0.7);
      svg.select('.tooltip').remove();
    })
    .on('click', (event, d) => {
      onTraceClick(d.traceId);
    });

  svg.append('text')
    .attr('x', margin.left)
    .attr('y', margin.top - 5)
    .style('font-size', '12px')
    .style('fill', '#666')
    .text('Duration (ms)');
}
