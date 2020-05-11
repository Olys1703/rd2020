import React from 'react';
import { Movie } from './types/Movie';
export const CnxtApp = React.createContext({
  setListOnload: (moviesOnload: boolean) => {},
  listOnload: true,
  setMovie: (movie: Movie) => {},
});
CnxtApp.displayName = 'App props';
