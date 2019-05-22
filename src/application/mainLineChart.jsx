import React, { Component } from 'react'
import { LineChart } from '../components/index';

export class MainLineChart extends Component {

  componentWillMount() {
    this.randomData();
  }

  render() {
    const rawData = this.state.rawData;

    return (
      <div style={{padding: '10px'}}>
        <LineChart data={rawData} height={500} width={800}></LineChart>
        <button onClick={() => this.randomData()}>Generate</button>
      </div>
    )
  }

  randomData() {
    let rawData = [];
    for (let i=0; i < 100; i++) {
        // if (i%5 === 0) {
            rawData.push(Math.floor((Math.random() * 100000) + 1));
        // }
    }

    this.setState({
      'rawData': rawData
    });
  }
}
