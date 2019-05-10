import React, { Component } from "react";
import { ListItemAvatar, Avatar, ListItemText, ListItem, List, Grid } from "@material-ui/core";

export class AjaxCall extends Component {
    constructor(props) {
        super(props);
        this.state= {countries: []};
    }

    async componentWillMount() {
        const data = await this.getData();
        this.setState({ countries: data });
    }

    render() {
        const {countries} = this.state;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={4}>
                        <List component="nav">
                            {
                                countries.map((country, index) =>
                                    <ListItem key={index} alignItems="flex-start"divider="true">
                                        <ListItemAvatar>
                                            <Avatar alt={country.name} src={country.flag} />
                                        </ListItemAvatar>
                                        <ListItemText primary={country.name}/>
                                    </ListItem>
                                )
                            }
                        </List>
                    </Grid>
                    <Grid item xs={8}>coucou</Grid>
                </Grid>
            </React.Fragment>
        );
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