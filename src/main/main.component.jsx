import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Board } from '../tictactoe/board';
import { Chart1 } from '../chart1/chart1';

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
                            <Link to="/chart">Chart1</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="content">
                        <Route path="/tictactoe" component={Board} />
                        <Route path="/chart" component={Chart1} />
                    </div>
                </div>
            </Router>
        );
    }
}