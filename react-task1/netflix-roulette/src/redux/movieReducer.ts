import { SELECT_MOVIE, SET_LIST_ONLOAD, SET_MOVIES } from './types';
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
      break;
    case SET_MOVIES:
      return { ...state, movies: action.payload.concat() };
      break;
    case SET_LIST_ONLOAD:
      return { ...state, listOnload: action.payload };
    default:
      return state;
  }
  return state;
};
