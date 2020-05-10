import React from 'react';
import { Movie } from '../../common/types/Movie';
import style from './movieDescription.module.scss';
export default class MovieDescription extends React.Component<
  {
    movie: Movie | undefined;
  },
  { imgError: boolean }
> {
  constructor(props: { movie: Movie | undefined }) {
    super(props);
    this.state = {
      imgError: false,
    };
  }
  render() {
    return (
      <>
        {this.props.movie ? (
          <div className={style.movie}>
            {this.state.imgError ? (
              <span className={style['mock-poster']}>
                <p>No poster found</p>
              </span>
            ) : (
              <img
                className={style.poster}
                src={
                  'https://image.tmdb.org/t/p/original' +
                  this.props.movie.poster_path
                }
                alt='poster'
                onError={() => {
                  this.setState({ imgError: true });
                }}
              />
            )}
            <div className={style.description}>
              <div className={style.header}>
                <h2 className={style.title}>{this.props.movie?.title}</h2>
                <span className={style.rating}>
                  {this.props.movie?.vote_average}
                </span>
              </div>
              <div>
                <span>{this.props.movie?.release_year}</span>
                <span className={style.runtime}>
                  {this.props.movie.runtime} min
                </span>
              </div>
              <div className={style.overview}>{this.props.movie.overview}</div>
              <div className={style.director}>
                Director:{' '}
                {this.props.movie.crew
                  ?.filter((person) => person.job === 'Director')
                  .map((person) => person.name)
                  .join(', ')}
                {'.'}
              </div>
              <div className={style.cast}>
                Cast:{' '}
                {this.props.movie.cast
                  ?.slice(0, 9)
                  .map((person) => person.name)
                  .join(', ')}
                {'.'}
              </div>
            </div>
          </div>
        ) : (
          <div className={style.mock}></div>
        )}
      </>
    );
  }
}