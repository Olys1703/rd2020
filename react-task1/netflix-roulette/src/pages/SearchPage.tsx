import React from 'react';
import { Header } from '../components/Header/Header';
import ListSort from '../components/ListSort/ListSort';
import { ListMovieCards } from '../../src/components/ListMovieCards/ListMovieCards';
//import { CnxtSearchToCards } from '../../common/context';
import { Movie } from '../common/types/Movie';
import { Search } from '../components/Search/Search';
import style from './searchPage.module.scss';

export default class SearchPage extends React.Component<
  {},
  { movies: Movie[] }
> {
  constructor(props: {}) {
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
        <Header barHidden={false}>
          <Search setMovies={this.setMovies} />
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
