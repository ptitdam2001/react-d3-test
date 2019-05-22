import React, { Component } from "react";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";

const useStyles = {
    list: {
        // overflowY: 'scroll',
        height: '100%'
    }
};

export class CountryList extends Component {
    chooseCountry(country) {
        this.props.onSelect(country);
    }
    render() {
        const classes = useStyles;

        return (
            <List component="nav" style={classes.list}>
                {
                    this.props.countries.map((country, index) =>
                        <ListItem key={index} alignItems="flex-start" divider={true} button={true} onClick={this.chooseCountry.bind(this, country)}>
                            <ListItemAvatar>
                                <Avatar alt={country.name} src={country.flag} />
                            </ListItemAvatar>
                            <ListItemText primary={country.name} secondary={country.region}/>
                        </ListItem>
                    )
                }
            </List>
        );
    }
}