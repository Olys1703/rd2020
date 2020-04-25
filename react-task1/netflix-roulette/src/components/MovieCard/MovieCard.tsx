import React, { useState } from 'react';
import style from './movieCard.module.scss';
type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const MovieCard: React.FC<Movie> = (props) => {
  const [imgError, setImgError] = useState<boolean>(false);
  return (
    <div className={style['card-wrapper']}>
      <article className={style.card}>
        <div className={style['poster-wrapper']}>
          {imgError ? (
            <span className={style['mock-poster']}>
              <p>No poster found</p>
            </span>
          ) : (
            <img
              className={style.poster}
              src={props.Poster}
              alt='poster'
              onError={() => {
                setImgError(true);
              }}
            />
          )}
        </div>
        <h3>{props.Title}</h3>
      </article>
    </div>
  );
};
