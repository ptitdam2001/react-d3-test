import React, { Component } from "react";
import {connect} from 'react-redux';

import { Grid, FormControl, TextField, InputAdornment, LinearProgress } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { CountryInfo, WorldMap } from "../index";
import { CountryList } from "./countryList";

import { CountryActions } from "../../actions/countries/actions";
import { CountriesAPI } from "../../services/countriesAPI";

class CountryPage extends Component {
    constructor(props) {
        super(props);
        this.state= {
            countries: [],
            selected: null,
            searchText: null
        };
    }

    componentWillMount() {
        this.props.initCountries()
    }

    render() {
        const selected = this.state.selected;

        const countriesToDisplay = this.props.filteredCountries.text ? this.props.filteredCountries.elems : this.props.countries;

        return (
            <React.Fragment>
                <Grid container style={{height: '100%'}}>
                    <Grid item xs={4} style={{maxHeight: '100%', overflow: 'auto'}}>
                        <FormControl fullWidth={true}>
                            <TextField
                                label="Search country"
                                id="search-country"
                                fullWidth={true}
                                margin="normal"
                                name="searchText"
                                onChange={this.handleChangeSearchText.bind(this)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </FormControl>
                        { this.props.countries.length === 0 ? <LinearProgress /> : null}
                        <CountryList countries={countriesToDisplay} onSelect={this.chooseCountry.bind(this)}></CountryList>
                    </Grid>
                    <Grid item xs={8} style={{padding: '8px'}}>
                        <Grid container spacing={8} alignItems="stretch" direction="row">
                            <Grid item xs={12}>
                                <CountryInfo
                                    country={selected}
                                    footer={ !selected ? null : (
                                        <WorldMap country={selected} height={400} width={600}></WorldMap>
                                    )}>
                                </CountryInfo>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    handleChangeSearchText(event) {
        this.props.filterCountries(event.target.value);
    }

    chooseCountry(country) {
        this.setState({selected: country});
    }
}

// Define attribute from store
function mapStateToProps(state) {
    return {
        countries: state.elems,
        filteredCountries: state.find
    };
}

// Define function into props from store.dispatch
function mapDispatchToProps(dispatch, props) {
    return Object.assign({}, props, {
        initCountries: async () => {
            const data = await CountriesAPI.getData();
            dispatch(CountryActions.set_countries(data));
        },
        filterCountries: text => dispatch(CountryActions.find_country(text)),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage);