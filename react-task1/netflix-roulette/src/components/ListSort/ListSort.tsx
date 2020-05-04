import React from 'react';
//import type { Movie } from '../../common/types/Movie';
import style from './listSort.module.scss';
import { Movie } from '../../common/types/Movie';
import { CnxtSearchToCards } from '../../common/context';
// type Movie = {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// };

export default class ListSort extends React.Component<{
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}> {
  sortMovies(sortKey: string) {
    const movies = this.props.movies.concat();
    movies.sort((a, b) => {
      return a[sortKey] - b[sortKey];
    });
    this.setState({ movies: movies });
    this.props.setMovies(movies);
  }
  render() {
    console.log(this.props);
    return (
      <div className={style.filter}>
        <div className={style.counter}>
          <span>{this.props.movies.length} movies found</span>
        </div>
        <div className={style.sort}>
          <span>Sort by:</span>
          <button
            className={style.btn}
            onClick={() => {
              this.sortMovies('release_year');
            }}
          >
            release date
          </button>
          <button
            className={style.btn}
            onClick={() => {
              this.sortMovies('vote_average');
            }}
          >
            rating
          </button>
        </div>
      </div>
    );
  }
}
