import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import style from './listMovieCards.module.scss';
import { Movie } from '../../common/types/Movie';
import ListSort from '../ListSort/ListSort';

interface Movies {
  movies: Movie[];
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
  setMovies: (movies: Movie[]) => void;
}
export const ListMovieCards: React.FC<Movies> = (props) => {
  return props.movies.length ? (
    <>
      <ListSort movies={props.movies} setMovies={props.setMovies} />
      <section className={style.cards}>
        {props.movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} setMovie={props.setMovie} />
        ))}
      </section>
    </>
  ) : (
    <div className={style['mock-list']}>No films found</div>
  );
};
