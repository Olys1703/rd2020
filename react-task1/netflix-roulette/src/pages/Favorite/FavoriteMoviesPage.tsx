import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import ListMovieCards from '../../components/ListMovieCards/ListMovieCards';
import style from './favoriteMoviesPage.module.scss';
import { useDispatch } from 'react-redux';
import { setMovies } from '../../redux/actions';

const FavoriteMoviesPage: React.FC = () => {
  const sFavoriteMoviesId = localStorage.getItem('favoriteMovies');
  const favoriteMoviesId = sFavoriteMoviesId
    ? JSON.parse(sFavoriteMoviesId)
    : [];
  const favoriteMovies = favoriteMoviesId.length
    ? favoriteMoviesId.reduce((movies: any, movieId: any) => {
        const movie = localStorage.getItem(movieId);
        if (movie) {
          movies.push(JSON.parse(movie));
        }
        return movies;
      }, [])
    : [];
  const depatch = useDispatch();
  useEffect(() => {
    depatch(setMovies(favoriteMovies));
  }, []);

  return (
    <>
      <Header serchLinkHidden={false} favoriteLinkHidden={true}>
        <div className={style.title}>YOUR FAVORITE MOVIES</div>
      </Header>
      <main className={style.main}>
        {favoriteMovies.length ? (
          <ListMovieCards />
        ) : (
          <div className={style['mock-list']}>No films found</div>
        )}
      </main>
    </>
  );
};
export default FavoriteMoviesPage;
