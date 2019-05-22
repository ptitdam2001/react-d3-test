import React, { Component } from 'react'

import {max} from 'd3-array';
import { scaleLinear, scaleBand } from 'd3-scale';
import { select, event } from 'd3-selection';
import {axisLeft, axisBottom} from 'd3-axis';

import './barChart.css';

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };

    this.svg = null;
  }

  componentDidMount() {
    this._height = this.props.height - this.margin.top - this.margin.bottom;
    this._width = this.props.width - this.margin.left - this.margin.right;
    this.createBarChart();
  }

  componentDidUpdate() {
    this.updateBar();
  }

  createBarChart() {
    const node = this.node;

    this.x = scaleBand().range([0, this._width]).padding(0.1);
    this.y = scaleLinear().range([this._height, 0]);

    // init chart
    this.svg = select(node)
      .attr('width', this._width + this.margin.left + this.margin.right)
      .attr('height', this._height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.right + ')');

    // init axis
    this.svg
      .append('g')
      .attr('class', 'y-axis')
      .call(axisLeft(this.y));

    this.svg
      .append('g')
      .attr('class', 'x-axis')
      .call(axisBottom(this.x))
      .attr('transform', 'translate(0,'+ this._height +')');

    this.updateBar();
  }

  updateBar() {
    const x = this.x.domain(this.props.data.map(d => d.name));
    const y = this.y.domain([0, max(this.props.data, d => d.votes + 200)]);

    const tip = select(this.tip);

    this.svg.selectAll('.bar')
      .remove()
      .exit()
      .data(this.props.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .style('fill', '#fe9922')
      .attr('x', (data, idx) => x(data.name))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.votes))
      .attr('height', d => this._height - y(d.votes))
      .on('mousemove', data => {
        tip.style('position', 'absolute')
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY + 20}px`)
          .style('display', 'inline-block')
          .style('opacity', '0.9')
          .html(`<div><strong>${data.name}</strong>: ${data.votes} votes</div>`)
      })
      .on('mouseout', () => tip.style('display', 'none'));

    // update axis
    this.svg.select('.x-axis').call(axisBottom(x));
    this.svg.select('.y-axis').call(axisLeft(y));
  }

  render() {
    return (
      <div>
        <svg ref={node => this.node = node} width={this.props.width} height={this.props.height}></svg>
        <div ref={node => this.tip = node} className="tooltip"></div>
        {this.props.children}
      </div>
    )
  }
}
