import React, { useState } from 'react';
import { MovieCardWithRouter } from '../MovieCard/MovieCard';
import style from './listMovieCards.module.scss';
import { Movie } from '../../common/types/Movie';
import ListSort from '../ListSort/ListSort';
// type Movie = {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// };
interface Movies {
  movies: Movie[];
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
  setMovies: (movies: Movie[]) => void;
}
export const ListMovieCards: React.FC<Movies> = (props) => {
  //const cardsClassName: string = 'card-container'
  return props.movies.length ? (
    <>
      <ListSort movies={props.movies} setMovies={props.setMovies} />
      <section className={style.cards}>
        {props.movies.map((movie: Movie) => (
          <MovieCardWithRouter
            key={movie.id}
            movie={movie}
            setMovie={props.setMovie}
          />
        ))}
      </section>
    </>
  ) : (
    <div className={style['mock-list']}>No films found</div>
  );
};
