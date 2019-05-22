import * as ACTIONS from './types';

export function find_country(searchText) {
    return {
        type: ACTIONS.COUNTRY_FIND,
        text: searchText
    };
}

export function get_all_countries() {
    return {
        type: ACTIONS.ALL_COUNTRIES
    };
}