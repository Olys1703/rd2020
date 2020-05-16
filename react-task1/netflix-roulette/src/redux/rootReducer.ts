import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { appReducer } from './appReducer';
export const rootReducer = combineReducers({
  movies: movieReducer,
  app: appReducer,
});
