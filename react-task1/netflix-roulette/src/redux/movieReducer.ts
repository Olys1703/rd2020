import { SELECT_MOVIE, SET_MOVIES, SET_MAIN_MOVIE } from './types';
const initialState = {
  movies: [],
  selectedMovie: undefined,
};
const initAction = {
  type: '__INIT__',
  payload: {},
};
export const movieReducer = (
  state = initialState,
  action: any = initAction
) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...state, selectedMovie: { ...action.payload } };
    case SET_MOVIES:
      return { ...state, movies: action.payload.concat() };
    case SET_MAIN_MOVIE:
      return { ...state, mainMovie: { ...action.payload } };
    default:
      return state;
  }
};
