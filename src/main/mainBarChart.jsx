import React, { Component } from 'react'
import { BarChart } from '../barChart/barChart';

export class MainBarChart extends Component {
  render() {
    return (
      <div style={{padding: '10px'}}>
        <BarChart data={[5, 10, 1, 3]} size={[500, 500]}></BarChart>
      </div>
    )
  }
}
