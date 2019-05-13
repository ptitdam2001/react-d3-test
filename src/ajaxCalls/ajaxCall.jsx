import React, { Component } from "react";
import { ListItemAvatar, Avatar, ListItemText, ListItem, List, Grid } from "@material-ui/core";
import { CountryInfo } from "./countryInfo";

const useStyles = {
    list: {
        // overflowY: 'scroll',
        height: '100%'
    }
};

export class CountryPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            countries: [],
            selected: null
        };
    }

    async componentWillMount() {
        const data = await this.getData();
        this.setState({ countries: data });
    }

    render() {
        const classes = useStyles;
        const {countries, selected} = this.state;
        return (
            <React.Fragment>
                <Grid container style={{height: '100%'}}>
                    <Grid item xs={4} style={{maxHeight: '100%', overflow: 'auto'}}>
                        <List component="nav" style={classes.list}>
                            {
                                countries.map((country, index) =>
                                    <ListItem key={index} alignItems="flex-start" divider={true} button={true} onClick={this.chooseCountry.bind(this, country)}>
                                        <ListItemAvatar>
                                            <Avatar alt={country.name} src={country.flag} />
                                        </ListItemAvatar>
                                        <ListItemText primary={country.name}/>
                                    </ListItem>
                                )
                            }
                        </List>
                    </Grid>
                    <Grid item xs={8}>
                        <CountryInfo country={selected}></CountryInfo>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    chooseCountry(country) {
        this.setState({selected: country});
    }

    async getData() {
        const promise = new Promise((resolve, reject) =>
            fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
                .then(response => response.json())
                .catch(reject)
                .then(resolve)
        );

        return await promise;
    }
}