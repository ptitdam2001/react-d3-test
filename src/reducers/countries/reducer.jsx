import {ALL_COUNTRIES, COUNTRY_FIND} from '../../actions/countries/types';

const stateInit = {
    elems: [],
    find: {
        text: '',
        elems: []
    }
};

export default function countryReducer(state = stateInit, action) {
    let newState;

    switch(action.type) {
        case ALL_COUNTRIES:
            async function getAll() {
                const promise = new Promise((resolve, reject) =>
                    fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
                        .then(response => response.json())
                        .catch(reject)
                        .then(resolve)
                );

                return await promise;
            }
            const founded = getAll();

            newState = Object.assign({}, state, {elems: founded});
            break;

        case COUNTRY_FIND:
            let countries = state.elems;
            var searchText = action.text;
            countries = searchText ? countries.filter(country => (country.name.toLowerCase()).includes(searchText.toLowerCase())) : countries;
            newState = Object.assign({}, state, {find: {text: searchText, elems: countries}});
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}