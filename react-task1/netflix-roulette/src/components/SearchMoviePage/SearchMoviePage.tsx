import React from 'react';
import { Header } from '../Header/Header';
import ListSort from '../ListSort/ListSort';
import { ListMovieCards } from '../ListMovieCards/ListMovieCards';
import { CnxtSearchToCards } from '../../common/context';
//import type { Movie } from '../../common/types/Movie';
import style from './searchMoviePage.module.scss';
type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export default class SearchMoviePage extends React.Component<
  {},
  { movies: Movie[] }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: [
        // {
        //   Title: 'Kill Bill: Vol. 1',
        //   Year: '2003',
        //   imdbID: 'tt0266697',
        //   Type: 'movie',
        //   Poster:
        //     'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        // },
        // {
        //   Title: 'Kill Bill: Vol. 2',
        //   Year: '2004',
        //   imdbID: 'tt0378194',
        //   Type: 'movie',
        //   Poster:
        //     'https://m.media-amazon.com/images/M/MV5BNmFiYmJmN2QtNWQwMi00MzliLThiOWMtZjQxNGRhZTQ1MjgyXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        // },
      ],
    };
    this.setMovies = this.setMovies.bind(this);
  }
  //static contextType = CnxtSearchToCards;
  setMovies(movieName: string) {
    console.log(this.state.movies);
    console.log(movieName);
    fetch('http://localhost:8080/films')
      .then((data) => data.json())
      .then((json) => {
        this.setState({ movies: json });
        console.log(this.state);
      });
  }
  render() {
    return (
      <>
        <CnxtSearchToCards.Provider value={{ setMovie: this.setMovies }}>
          <Header />
        </CnxtSearchToCards.Provider>
        <main className={style.main}>
          {this.state.movies.length ? (
            <>
              <ListSort movies={this.state.movies} />
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
