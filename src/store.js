import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import repositories from './reducers/repositories';


const store = createStore(
  combineReducers({ repositories }),

)

export default store;
