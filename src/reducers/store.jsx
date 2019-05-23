import countryReducer from './countries/reducer';
import {createStore} from 'redux';

export default createStore(countryReducer);