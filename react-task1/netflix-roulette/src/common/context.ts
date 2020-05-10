import React from 'react';
import { Movie } from './types/Movie';
export const CnxtApp = React.createContext({
  setMoviesOnload: (moviesOnload: boolean) => {},
  setMovie: (movie: Movie) => {},
});
CnxtApp.displayName = 'App props';
