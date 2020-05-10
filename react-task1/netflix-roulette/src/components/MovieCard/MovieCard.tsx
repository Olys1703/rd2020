import React, { useState, useEffect } from 'react';
import style from './movieCard.module.scss';
import { Movie } from '../../common/types/Movie';
import {
  withRouter,
  RouteComponentProps,
  Link,
  generatePath,
} from 'react-router-dom';

interface IMovieCard extends RouteComponentProps {
  movie: Movie;
  setMovie: (movie: Movie) => void;
}

const MovieCard: React.FC<IMovieCard> = (props) => {
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <div className={style['card-wrapper']}>
      <Link
        style={{ textDecoration: 'none', color: 'initial' }}
        to={`/film/${props.movie.title}`}
      >
        <article
          className={style.card}
          onClick={() => {
            //localStorage.setItem('movie', JSON.stringify(props.movie));
            props.setMovie(props.movie);
            props.history.replace(`/film/${props.movie.title}`);
          }}
        >
          <div className={style['poster-wrapper']}>
            {imgError ? (
              <span className={style['mock-poster']}>
                <p>No poster found</p>
              </span>
            ) : (
              <img
                className={style.poster}
                src={
                  'https://image.tmdb.org/t/p/original' +
                  props.movie.poster_path
                }
                alt='poster'
                onError={() => {
                  setImgError(true);
                }}
              />
            )}
          </div>
          <h3>{props.movie.title ? props.movie.title : 'no title found'}</h3>
          <span className={style['release-date']}>
            {props.movie.release_year ? props.movie.release_year : ' - '}
          </span>
          <span>
            {props.movie.genres && props.movie.genres.length !== 0
              ? props.movie.genres
                  .map((genre: { id: number; name: string }) => {
                    return genre.name;
                  })
                  .join(', ')
              : ''}
          </span>
        </article>
      </Link>
    </div>
  );
};
export const MovieCardWithRouter = withRouter(MovieCard);
