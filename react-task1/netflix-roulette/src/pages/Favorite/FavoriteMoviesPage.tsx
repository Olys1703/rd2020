import React, { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { ListMovieCards } from '../../components/ListMovieCards/ListMovieCards';
import style from './favoriteMoviesPage.module.scss';
import { CnxtApp } from '../../common/context';

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
      <Header serchLinkHidden={false} favoriteLinkHidden={true}>
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
