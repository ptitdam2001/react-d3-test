import * as ACTIONS from './types';

export class CountryActions {
    static find_country(searchText) {
        return {
            type: ACTIONS.COUNTRY_FIND,
            text: searchText
        };
    }

    static set_countries(countries) {
        return {
            type: ACTIONS.SET_COUNTRIES,
            countries
        };
    }

    static get_Countries(dispatch) {
        return {
            type: ACTIONS.GET_ALL,
            dispatch
        };
    }

    static fetch_countries() {
        return {
            type: ACTIONS.FETCH_COUNTRIES
        }
    }
}