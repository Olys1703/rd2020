import React from 'react';
import { Header } from '../components/Header/Header';
import ListSort from '../components/ListSort/ListSort';
import { ListMovieCards } from '../../src/components/ListMovieCards/ListMovieCards';
//import { CnxtSearchToCards } from '../../common/context';
import { Movie } from '../common/types/Movie';
import { SearchWithRouter } from '../components/Search/Search';
import style from './searchPage.module.scss';
import { CnxtApp } from '../common/context';
import Loader from '../components/Loader/Loader';

export default class SearchPage extends React.Component<
  { setMovie: (movie: Movie) => void },
  { movies: Movie[] }
> {
  constructor(props: { setMovie: (movie: Movie) => void }) {
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
      <CnxtApp.Consumer>
        {(value) => (
          <>
            <Header serchLinkHidden={false} favoriteLinkHidden={false}>
              <SearchWithRouter
                setMovies={this.setMovies}
                setListOnload={value.setListOnload}
              />
            </Header>
            <main className={style.main}>
              {value.listOnload ? (
                <ListMovieCards
                  setListOnload={value.setListOnload}
                  movies={this.state.movies}
                  setMovie={this.props.setMovie}
                  setMovies={this.setMovies}
                />
              ) : (
                <Loader />
              )}
            </main>
          </>
        )}
      </CnxtApp.Consumer>
    );
  }
}
