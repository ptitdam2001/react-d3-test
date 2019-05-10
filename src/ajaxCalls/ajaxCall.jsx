import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class AjaxCall extends Component {

    componentWillMount() {
        fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'}).then(countries => {
            this.setState({ countries: countries.json() });
            console.log('_____________',countries.blob(),  JSON.stringify(countries));
        })
    }

    render() {
        const {countries} = this.state;

        return (
            <React.Fragment>
                <List component="nav">
                    {countries.map(country => <ListItem>{country}</ListItem>)}
                </List>
                <div>Coucou</div>
            </React.Fragment>
        );
    }
}