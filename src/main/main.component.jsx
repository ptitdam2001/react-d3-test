import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Board } from '../tictactoe/board';
import { MainBarChart } from './mainBarChart';
import { MainLineChart } from './mainLineChart';
import { Weather } from '../weather/weather';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './main.css';

export class Main extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({value});

    }
    render() {
        const {value} = this.state;

        return (
            <Router>
                <AppBar position="static">
                    <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                        <Tab label="Tic Tac toe" component={Link} to="/tictactoe"></Tab>
                        <Tab label="Chart bar" component={Link} to="chart"></Tab>
                        <Tab label="Line chart" component={Link} to="/line-chart"></Tab>
                    </Tabs>
                </AppBar>
                <div className="content">
                    <Route path="/tictactoe" component={Board} />
                    <Route path="/chart" component={MainBarChart} />
                    <Route path="/line-chart" component={MainLineChart} />
                    <Route path="/weather" component={Weather} />
                </div>
                {/* <div className="content">
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
                </div> */}
            </Router>
        );
    }
}