import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import ListSort from '../components/ListSort/ListSort';
import { ListMovieCards } from '../../src/components/ListMovieCards/ListMovieCards';
import { SearchWithRouter } from '../components/Search/Search';
import style from './favoriteMoviesPage.module.scss';
import { CnxtApp } from '../common/context';
import Loader from '../components/Loader/Loader';

const FavoriteMoviesPage: React.FC = () => {
  const sFavoriteMoviesId = localStorage.getItem('favoriteMovies');
  const favoriteMoviesId = sFavoriteMoviesId
    ? JSON.parse(sFavoriteMoviesId)
    : [];
  const favoriteMoviesFromLS = favoriteMoviesId.length
    ? favoriteMoviesId.reduce((movies: any, movieId: any) => {
        const movie = localStorage.getItem(movieId);
        if (movie) {
          movies.push(JSON.parse(movie));
        }
        return movies;
      }, [])
    : [];

  const [favoriteMovies, setFavoriteMovies] = useState<any>(
    favoriteMoviesFromLS
  );
  return (
    <>
      <Header serchLinkHidden={false} favoriteLinkHidden={false}>
        <div className={style.title}>YOUR FAVORITE MOVIES</div>
      </Header>
      <main className={style.main}>
        {favoriteMovies.length ? (
          <>
            <CnxtApp.Consumer>
              {(value) => (
                <ListMovieCards
                  movies={favoriteMovies}
                  setMovie={() => {}}
                  setListOnload={value.setListOnload}
                  setMovies={setFavoriteMovies}
                />
              )}
            </CnxtApp.Consumer>
          </>
        ) : (
          <div className={style['mock-list']}>No films found</div>
        )}
      </main>
    </>
  );
};
export default FavoriteMoviesPage;
