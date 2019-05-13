import React, { Component } from "react";

export class CountryInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <div>{JSON.stringify(this.props.country)}</div>
            </React.Fragment>
        );
    }
}