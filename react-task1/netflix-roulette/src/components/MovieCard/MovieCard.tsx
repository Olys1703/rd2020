import React, { useState } from 'react';
import style from './movieCard.module.scss';
import { Movie } from '../../common/types/Movie';
import { Link } from 'react-router-dom';
import FavoriteMark from '../FavoriteMark/FavoriteMark';
import { connect } from 'react-redux';
import { selectMovie } from '../../redux/actions';

interface IMovieCard {
  movie: Movie;
  setMovie: (movie: Movie) => void;
}

const MovieCard: React.FC<any> = (props) => {
  const [imgError, setImgError] = useState<boolean>(false);
  return (
    <div className={style['card-wrapper']}>
      <article className={style.card}>
        <Link
          className={style['poster-wrapper']}
          onClick={() => {
            props.selectMovie(props.movie);
          }}
          to={`/film/${props.movie.title}`}
        >
          {imgError ? (
            <span className={style['mock-poster']}>
              <p>No poster found</p>
            </span>
          ) : (
            <img
              className={style.poster}
              src={props.movie.poster_path}
              alt='poster'
              onError={() => {
                setImgError(true);
              }}
            />
          )}
        </Link>
        <div className={style['title-wrapper']}>
          <h3 className={style.title}>
            {props.movie.title ? props.movie.title : 'no title found'}
          </h3>
          <FavoriteMark movie={props.movie} />
        </div>
        <span className={style['release-date']}>
          {props.movie.release_year ? props.movie.release_year : ' - '}
        </span>
        <span className={style.genres}>
          {props.movie.genres?.length
            ? props.movie.genres
                .map((genre: { id: number; name: string }) => {
                  return genre ? genre.name : null;
                })
                .join(', ')
            : ''}
        </span>
      </article>
    </div>
  );
};
const mapDispatchToProps = {
  selectMovie,
};
export default connect(null, mapDispatchToProps)(MovieCard);
