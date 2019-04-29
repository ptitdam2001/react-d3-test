import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Board } from '../tictactoe/board';
import { MainBarChart } from './mainBarChart';
import { MainLineChart } from './mainLineChart';
import { Weather } from '../weather/weather';

import './main.css';

export class Main extends Component {
    render() {
        return (
            <Router>
                <div className="content">
                    <ul className="menu">
                        <li>
                            <Link to="/tictactoe">Tic tac toe</Link>
                        </li>
                        <li>
                            <Link to="/chart">Chart bar</Link>
                        </li>
                        <li>
                            <Link to="/line-chart">Line chart</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="content">
                        <Route path="/tictactoe" component={Board} />
                        <Route path="/chart" component={MainBarChart} />
                        <Route path="/line-chart" component={MainLineChart} />
                        <Route path="/weather" component={Weather} />
                    </div>
                </div>
            </Router>
        );
    }
}