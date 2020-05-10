import React from 'react';
import { MovieCardWithRouter } from '../MovieCard/MovieCard';
import style from './listMovieCards.module.scss';
import { Movie } from '../../common/types/Movie';
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
}
export const ListMovieCards: React.FC<Movies> = (props) => {
  //const cardsClassName: string = 'card-container'
  console.log(props);
  return (
    <section className={style.cards}>
      {props.movies.map((movie: Movie) => (
        <MovieCardWithRouter
          key={movie.id}
          movie={movie}
          setMovie={props.setMovie}
        />
      ))}
    </section>
  );
};
