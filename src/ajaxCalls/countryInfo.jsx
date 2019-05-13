import React, { Component } from "react";
import { Card, CardHeader, Divider, CardContent, Avatar, Typography } from "@material-ui/core";

export class CountryInfo extends Component {
    render() {
        return !this.props.country ? null : (
            <React.Fragment>
                <Card>
                    <CardHeader
                        avatar={
                        <Avatar alt={this.props.country.name} src={this.props.country.flag}></Avatar>
                        }
                        title={this.props.country.name + ` (${this.props.country.nativeName})`}
                        subheader={this.props.country.capital}>
                    </CardHeader>
                    <Divider></Divider>
                    <CardContent>
                        <Typography component="p">
                            population: {this.props.country.population}
                            <br />
                            currencies: {this.props.country.currencies.map(cur => cur.name).join(', ')}
                            <br />
                            languages: {this.props.country.languages.map(lang => lang.name).join(', ')}
                            <br />
                            region: {this.props.country.region + ' - ' + this.props.country.subregion}
                            <br />
                        </Typography>
                    </CardContent>

                </Card>
            </React.Fragment>
        );
    }
}