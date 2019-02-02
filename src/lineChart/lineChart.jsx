import React, { Component } from 'react'

import {max} from 'd3-array';
import {select} from 'd3-selection';
import {scaleLinear} from 'd3-scale';
import {axisBottom, axisLeft} from 'd3-axis';
import {line, curveMonotoneX} from 'd3-shape';

export class LineChart extends Component {
    constructor(props) {
        super(props);
        this.createLineChart = this.createLineChart.bind(this);
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };

        this.svg = null;
    }

    componentDidMount() {
        this._height = this.props.height - this.margin.top - this.margin.bottom;
        this._width = this.props.width - this.margin.left - this.margin.right;
        this.createLineChart();
    }

    componentDidUpdate() {
        this.updateLine();
    }

    createLineChart() {
        const node = this.node;

        this.x = scaleLinear().range([0, this._width]);
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

        this.line = this.svg
            .append('path')
            .attr('class', 'line')
            .style('fill', 'none')
            .style('stroke', '#777')
            .style('stroke-width', '1px');

        this.updateLine();

    }

    updateLine() {
        if (this.props.data) {
            const numberOfData = this.props.data.length;

            const domainX = this.x.domain([0, numberOfData + 1]);
            const domainY = this.y.domain([0, max(this.props.data)]);

            const _line = line()
                .x((data, idx) => domainX(idx))
                .y(data => domainY(data))
                .curve(curveMonotoneX)

            this.line
                .datum(this.props.data)
                .attr('d', _line);

            // add dot
            this.svg.selectAll('.dot')
                .remove()
                .exit()
                .data(this.props.data)
                .enter()
                .append('circle')
                .attr('class', 'dot')
                .attr('cx', (d, i) => domainX(i))
                .attr('cy', d => domainY(d))
                .attr('r', 2);

            // update axis
            this.svg.select('.x-axis').call(axisBottom(domainX));
            this.svg.select('.y-axis').call(axisLeft(domainY));
        }
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
