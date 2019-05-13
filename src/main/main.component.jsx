import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Board } from '../tictactoe/board';
import { MainBarChart } from './mainBarChart';
import { MainLineChart } from './mainLineChart';
import { Weather } from '../weather/weather';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './main.css';
import { CountryPage } from '../ajaxCalls/ajaxCall';

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
                        <Tab label="Chart bar" component={Link} to="/chart"></Tab>
                        <Tab label="Line chart" component={Link} to="/line-chart"></Tab>
                        <Tab label="Countries" component={Link} to="/countries"></Tab>
                    </Tabs>
                </AppBar>
                <div className="content">
                    <Switch>
                        <Route path="/tictactoe" component={Board} />
                        <Route path="/chart" component={MainBarChart} />
                        <Route path="/line-chart" component={MainLineChart} />
                        <Route path="/weather" component={Weather} />
                        <Route path="/countries" component={CountryPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}