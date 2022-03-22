import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import projectReducer from './projects/projects';

const reducer = combineReducers({ projects: projectReducer });
const store = createStore(
  reducer, applyMiddleware(logger),
);

export default store;
