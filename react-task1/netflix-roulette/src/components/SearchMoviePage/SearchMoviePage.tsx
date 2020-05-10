import React from 'react';
import { Header } from '../Header/Header';
import ListSort from '../ListSort/ListSort';
import { ListMovieCards } from '../ListMovieCards/ListMovieCards';
import { Movie } from '../../common/types/Movie';
import style from './searchMoviePage.module.scss';
import { SearchWithRouter } from '../Search/Search';

export default class SearchMoviePage extends React.Component<
  {},
  { genres: { id: number; name: string }[]; movies: Movie[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      genres: [
        { id: 28, name: 'Action' },
        { id: 12, name: 'Adventure' },
        { id: 16, name: 'Animation' },
        { id: 35, name: 'Comedy' },
        { id: 80, name: 'Crime' },
        { id: 99, name: 'Documentary' },
        { id: 18, name: 'Drama' },
        { id: 10751, name: 'Family' },
        { id: 14, name: 'Fantasy' },
        { id: 36, name: 'History' },
        { id: 27, name: 'Horror' },
        { id: 10402, name: 'Music' },
        { id: 9648, name: 'Mystery' },
        { id: 10749, name: 'Romance' },
        { id: 878, name: 'Science Fiction' },
        { id: 10770, name: 'TV Movie' },
        { id: 53, name: 'Thriller' },
        { id: 10752, name: 'War' },
        { id: 37, name: 'Western' },
      ],
      movies: [],
    };
    this.sortMovies = this.sortMovies.bind(this);
    this.setMovies = this.setMovies.bind(this);
  }

  setMovies(movies: Movie[]) {
    this.setState({ movies: movies });
  }
  subtitleGenre(geners: number[]) {
    return geners.map((genre) => {
      return this.state.genres.find((item) => item.id === genre);
    });
  }
  sortMovies(sortKey: string) {
    const movies = this.state.movies.concat();
    movies.sort((a, b) => {
      return a[sortKey] - b[sortKey];
    });
    this.setState({ movies: movies });
  }
  render() {
    return (
      <>
        <Header barHidden={false}>
          <SearchWithRouter setMovies={this.setMovies} />
        </Header>
        <main className={style.main}>
          {this.state.movies.length ? (
            <>
              <ListSort movies={this.state.movies} setMovies={this.setMovies} />
            </>
          ) : (
            <div className={style['mock-list']}>No films found</div>
          )}
        </main>
      </>
    );
  }
}
