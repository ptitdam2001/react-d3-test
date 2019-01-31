import React, { Component } from 'react'
import { BarChart } from '../barChart/barChart';

export class MainBarChart extends Component {
  constructor(props) {
    super(props);

    this.rawData = [
      {
        name: 'Chelsea',
        votes: 100,
      },
      {
        name: 'Arsenal',
        votes: 70,
      },
      {
        name: 'Liverpool',
        votes: 250,
      },
      {
        name: 'Manchester City',
        votes: 689,
      },
      {
        name: 'Manchester United',
        votes: 150,
      },
    ];
  }
  render() {
    return (
      <div style={{padding: '10px'}}>
        <BarChart data={this.rawData} size={[500, 500]}></BarChart>
      </div>
    )
  }
}
