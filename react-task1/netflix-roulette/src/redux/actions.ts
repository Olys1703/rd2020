import {
  SELECT_MOVIE,
  SHOW_LOADER,
  HIDE_LOADER,
  SET_MOVIES,
  SET_MAIN_MOVIE,
} from './types';
import getMoviesByTitle from '../components/API/getMoviesByTitle';
import getMoviesByDirectorName from '../components/API/getMoviesByDirectorName';
import getMovieById from '../components/API/getMovieById';

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

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function setMainMovie(movie: any) {
  return {
    type: SET_MAIN_MOVIE,
    payload: movie,
  };
}

export function fetchMovies(searchValue: string, searchType: string) {
  return async (dispath: any) => {
    dispath(showLoader());
    let fetchFunction;
    switch (searchType) {
      case 'title':
        fetchFunction = getMoviesByTitle;
        break;
      case 'director':
        fetchFunction = getMoviesByDirectorName;
        break;
      default:
        fetchFunction = () => [];
    }
    const movies: any = await fetchFunction(searchValue);
    dispath(setMovies(movies));
    dispath(hideLoader());
  };
}

export function fetchMovie(value: string | number) {
  return async (dispath: any) => {
    dispath(showLoader());
    let movieId = Number(value);
    if (typeof value === 'string') {
      const movies = await getMoviesByTitle(value.toString());
      movieId = movies[0].id;
    }
    const movie = await getMovieById(movieId);
    dispath(setMainMovie(movie));
    dispath(hideLoader());
  };
}
