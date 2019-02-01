import React, { Component } from 'react'
import { BarChart } from '../barChart/barChart';

export class MainBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'rawData': [
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
      ]
    };
  }
  render() {
    const rawData = this.state.rawData;

    return (
      <div style={{padding: '10px'}}>
        <BarChart data={rawData} height={500} width={500}>
          <div>transclusion here</div>
        </BarChart>
        <button onClick={() => this.randomData()}>Generate</button>
      </div>
    )
  }

  randomData() {
    this.setState({
      'rawData': this.state.rawData.map(item => {
        item.votes = Math.floor((Math.random() * 100000) + 1);
        return item;
      })
    });
  }
}
