import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import style from './listMovieCards.module.scss';
import { Movie } from '../../common/types/Movie';
import ListSort from '../ListSort/ListSort';
import { connect } from 'react-redux';

interface Movies {
  movies: Movie[];
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
  setMovies: (movies: Movie[]) => void;
}
export const ListMovieCards: React.FC<any> = (props) => {
  return props.movies.length ? (
    <>
      <ListSort />
      <section className={style.cards}>
        {props.movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </>
  ) : (
    <div className={style['mock-list']}>No films found</div>
  );
};

const mapStateToProps = (state: any) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps, null)(ListMovieCards);
