import React from 'react';
import { Header } from '../components/Header/Header';
import ListSort from '../components/ListSort/ListSort';
import { ListMovieCards } from '../../src/components/ListMovieCards/ListMovieCards';
//import { CnxtSearchToCards } from '../../common/context';
import { Movie } from '../common/types/Movie';
import style from './aboutPage.module.scss';
import { Search } from '../components/Search/Search';
import MovieDescription from '../components/MovieDescription/MovieDescription';

export default class AboutPage extends React.Component<
  { movie: Movie | undefined },
  { movies: Movie[] }
> {
  constructor(props: { movie: Movie }) {
    super(props);
    this.state = {
      movies: [],
    };
    this.setMovies = this.setMovies.bind(this);
  }
  setMovies(movies: Movie[]) {
    this.setState({ movies: movies });
  }
  render() {
    return (
      <>
        <Header barHidden={true}>
          <MovieDescription movie={this.props.movie} />
        </Header>
        <main className={style.main}>
          {this.state.movies.length ? (
            <>
              <ListSort movies={this.state.movies} setMovies={this.setMovies} />
              <ListMovieCards movies={this.state.movies} />
            </>
          ) : (
            <div className={style['mock-list']}>No films found</div>
          )}
        </main>
      </>
    );
  }
}
