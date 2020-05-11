import React, { useState } from 'react';
import style from './favoriteMark.module.scss';
import { Movie } from '../../common/types/Movie';

const FavoriteMark: React.FC<{ movie: Movie }> = (props) => {
  let sMovieId = props.movie.id.toString();
  const [isAddToFavorite, addToFavorite] = useState<boolean>(
    !!localStorage.getItem(sMovieId)
  );
  return (
    <button
      className={[
        style['favorite-mark'],
        [isAddToFavorite ? style.active : ''],
      ].join(' ')}
      onClick={(event) => {
        const sFavoriteMovies = localStorage.getItem('favoriteMovies');
        const favoriteMovies: any = sFavoriteMovies
          ? JSON.parse(sFavoriteMovies)
          : [];
        if (isAddToFavorite) {
          localStorage.removeItem(sMovieId);
          const index = favoriteMovies.indexOf(props.movie.id);
          favoriteMovies.splice(index, 1);
          addToFavorite(false);
        } else {
          localStorage.setItem(sMovieId, JSON.stringify(props.movie));
          favoriteMovies.push(sMovieId);
          addToFavorite(true);
        }
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        event.stopPropagation();
      }}
    >
      &#10084;
    </button>
  );
};
export default FavoriteMark;
