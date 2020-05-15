import { SELECT_MOVIE, SET_LIST_ONLOAD, SET_MOVIES } from './types';
export function selectMovie(movie: any) {
  return {
    type: SELECT_MOVIE,
    payload: movie,
  };
}
export function setMovies(movies: any) {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
}

export function setListOnload(onload: boolean) {
  return {
    type: SET_LIST_ONLOAD,
    payload: onload,
  };
}

function setMoviesByDirectorName(movie: any) {
  return;
}
