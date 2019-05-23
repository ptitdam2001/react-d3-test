import {GET_ALL, COUNTRY_FIND, FETCH_COUNTRIES, SET_COUNTRIES} from '../../actions/countries/types';
import {CountryActions} from '../../actions/countries/actions';

const fetchCountries = async () => {
    const promise = new Promise((resolve, reject) =>
        fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
            .then(response => response.json())
            .catch(reject)
            .then(resolve)
    );

    return await promise;
}

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
        case SET_COUNTRIES:
            newState = Object.assign({}, state, {elems: action.countries});
            break;

        case FETCH_COUNTRIES:
            const founded = fetchCountries();
            newState = Object.assign({}, state, {elems: founded});
            break;

        case GET_ALL:
            action.dispatch(CountryActions.fetch_countries());
            break

        case COUNTRY_FIND:
            let countries = state.elems;
            const searchText = action.text;
            countries = searchText ? countries.filter(country => (country.name.toLowerCase()).includes(searchText.toLowerCase())) : countries;
            newState = Object.assign({}, state, {find: {text: searchText, elems: countries}});
            break;

        default:
            newState = state;
            break;
    }

    return newState;
}