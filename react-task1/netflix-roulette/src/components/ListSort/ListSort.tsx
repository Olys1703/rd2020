import React from 'react';
//import type { Movie } from '../../common/types/Movie';
import style from './listSort.module.scss';
type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export default class ListSort extends React.Component<{ movies: Movie[] }> {
  render() {
    console.log(this.props);
    return (
      <div className={style.filter}>
        <div className={style.counter}>
          <span>{this.props.movies.length} movies found</span>
        </div>
        <div className={style.sort}>
          <span>Sort by:</span>
          <button className={style.btn}>release date</button>
          <button className={style.btn}>rating</button>
        </div>
      </div>
    );
  }
}
