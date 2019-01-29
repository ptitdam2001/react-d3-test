import React, { Component } from 'react'
import { Board } from './board';

import './style.css';

export default class Game extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}
