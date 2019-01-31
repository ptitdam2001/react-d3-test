import React, { Component } from 'react'

import {max} from 'd3-array';
import { scaleLinear, scaleBand } from 'd3-scale';
import { select } from 'd3-selection';
import {axisLeft, axisBottom} from 'd3-axis';

import './barChart.css';

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
    this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;

    const height = this.props.size[1] - this.margin.top - this.margin.bottom;
    const width = this.props.size[0] - this.margin.left - this.margin.right;

    const x = scaleBand().range([0, width]).padding(0.1);
    const y = scaleLinear().range([height, 0]);

    const svg = select(node)
      .attr('width', width + this.margin.left + this.margin.right)
      .attr('height', height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.right + ')');



    // select(node)
    //   .selectAll("rect")
    //   .data(this.props.data)
    //   .enter()
    //   .append("rect");

    //   // .append('text')
    //   // .text(d => d);

    // select(node)
    //   .selectAll("rect")
    //   .data(this.props.data)
    //   .exit()
    //   .remove();

    // select(node)
    //   .selectAll('rect')
    //   .data(this.props.data)
    //   .style('fill', '#fe9922')
    //   .attr('y', d => this.props.size[1] - yScale(d))
    //   .attr('x', (d, i) => i * 25)
    //   .attr('width', 25)
    //   .attr('height', d => yScale(d))
    //   .style('stroke', '#9a8b7a')
    //   .style('stroke-width', '1px');

    x.domain(this.props.data.map(d => d.name));
    y.domain([0, max(this.props.data, d => d.votes + 200)]);

    svg.selectAll('rect')
      //.remove()
      //.exit()
      .data(this.props.data)
      .enter()
      .append('rect')
      .style('fill', '#fe9922')
      .attr('x', (data, idx) => x(data.name))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.votes))
      .attr('height', d => height - y(d.votes))

    svg
      .append('g')
      .attr('class', 'y-axis')
      .call(axisLeft(y));

    svg
      .append('g')
      .attr('class', 'x-axis')
      .call(axisBottom(x))
      .attr('transform', 'translate(0,'+ height +')');
  }

  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500}></svg>
    )
  }
}
