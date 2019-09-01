import { createStore, combineReducers } from 'redux';
import repositories from './reducers/repositories';


const store = createStore(
  combineReducers({ repositories }),

)

export default store;
