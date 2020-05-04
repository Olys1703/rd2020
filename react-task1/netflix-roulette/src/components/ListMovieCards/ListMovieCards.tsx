import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
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
}
export const ListMovieCards: React.FC<Movies> = (props) => {
  //const cardsClassName: string = 'card-container'
  console.log(props);
  return (
    <section className={style.cards}>
      {props.movies.map((movie: Movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
};
