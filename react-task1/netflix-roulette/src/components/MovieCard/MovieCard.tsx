import React, { useState, useEffect } from 'react';
import style from './movieCard.module.scss';
import { Movie } from '../../common/types/Movie';
// type Movie = {
//   Title: string;
//   Year: string;
//   imdbID: string;
//   Type: string;
//   Poster: string;
// };

export const MovieCard: React.FC<Movie> = (props) => {
  const [imgError, setImgError] = useState<boolean>(false);
  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${props.id}?api_key=9883bd1665c4884113e0eeb2e7d9efea`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
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
              src={'https://image.tmdb.org/t/p/original' + props.poster_path}
              alt='poster'
              onError={() => {
                setImgError(true);
              }}
            />
          )}
        </div>
        <h3>{props.title ? props.title : 'no title found'}</h3>
        <span className={style['release-date']}>
          {props.release_year ? props.release_year : ' - '}
        </span>
        <span>
          {props.genres && props.genres.length !== 0
            ? props.genres
                .map((genre: { id: number; name: string }) => {
                  return genre.name;
                })
                .join(', ')
            : ''}
        </span>
      </article>
    </div>
  );
};
