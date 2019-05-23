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

    static get_Countries() {
        return {
            type: ACTIONS.GET_ALL
        };
    }

    static fetch_countries() {
        return {
            type: ACTIONS.FETCH_COUNTRIES,
        }
    }
}