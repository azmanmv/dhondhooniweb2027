import { Component, ElementRef, OnInit, viewChild, effect } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-gray-800">Site Overview</h2>
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
          <div class="text-gray-500 text-sm font-medium uppercase">Total Visitors</div>
          <div class="mt-2 text-3xl font-bold text-gray-900">12,453</div>
          <div class="mt-1 text-sm text-green-600">↑ 12% this month</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
          <div class="text-gray-500 text-sm font-medium uppercase">Form Submissions</div>
          <div class="mt-2 text-3xl font-bold text-gray-900">48</div>
          <div class="mt-1 text-sm text-green-600">↑ 5 new today</div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
          <div class="text-gray-500 text-sm font-medium uppercase">Blog Views</div>
          <div class="mt-2 text-3xl font-bold text-gray-900">1,202</div>
          <div class="mt-1 text-sm text-gray-500">Stable</div>
        </div>
      </div>

      <!-- Chart -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h3 class="text-lg font-bold text-gray-800 mb-4">Weekly Traffic</h3>
        <div #chartContainer class="w-full h-64"></div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  chartContainer = viewChild<ElementRef>('chartContainer');

  ngOnInit() {
    // Wait for view to init then draw chart. 
    // In signal based component with viewChild, using effect or setTimeout is usually safe for DOM manipulation libraries.
    setTimeout(() => this.drawChart(), 0);
  }

  drawChart() {
    const element = this.chartContainer()?.nativeElement;
    if (!element) return;

    const data = [
      { day: 'Mon', value: 120 },
      { day: 'Tue', value: 150 },
      { day: 'Wed', value: 180 },
      { day: 'Thu', value: 140 },
      { day: 'Fri', value: 200 },
      { day: 'Sat', value: 90 },
      { day: 'Sun', value: 85 }
    ];

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = element.offsetWidth - margin.left - margin.right;
    const height = element.offsetHeight - margin.top - margin.bottom;

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .range([height, 0]);

    x.domain(data.map(d => d.day));
    y.domain([0, 220]); // Fixed max for simplicity

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => x(d.day) || 0)
      .attr('width', x.bandwidth())
      .attr('y', (d: any) => y(d.value))
      .attr('height', (d: any) => height - y(d.value))
      .attr('fill', '#3b82f6')
      .attr('rx', 4);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .call(d3.axisLeft(y));
  }
}