import React, { Component } from 'react'

import {max} from 'd3-array';
import {scaleLinear} from 'd3-scale';
import { select } from 'd3-selection';

import './barChart.css';

export class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect");
      // .append('text')
      // .text(d => d);

    select(node)
      .selectAll("rect")
      .data(this.props.data)
      .exit()
      .remove();

    select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('x', (d, i) => i * 25)
      .attr('width', 25)
      .attr('height', d => yScale(d))
  }

  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500}></svg>
    )
  }
}
