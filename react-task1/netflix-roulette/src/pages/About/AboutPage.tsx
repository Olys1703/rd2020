import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { ListMovieCards } from '../../components/ListMovieCards/ListMovieCards';
import { Movie } from '../../common/types/Movie';
import style from './aboutPage.module.scss';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import '../../components/API/getMoviesByTItle';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import getMoviesById from '../../components/API/getMovieById';
import getMoviesByTItle from '../../components/API/getMoviesByTItle';
import getMoviesByDirectorName from '../../components/API/getMoviesByDirectorName';
import { CnxtApp } from '../../common/context';
import Loader from '../../components/Loader/Loader';

interface IAboutPage extends RouteComponentProps<{ filmName: string }> {
  movie: Movie | undefined;
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
}
const AboutPage: React.FC<IAboutPage> = (props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [mainMovie, setMainMovie] = useState<Movie>();
  useEffect(() => {
    props.setListOnload(false);
    if (props.movie) {
      getMoviesById(props.movie.id).then((movie: Movie) => {
        setMainMovie(movie);
        props.setListOnload(true);
      });
    } else {
      console.log(props.match.params.filmName);
      getMoviesByTItle(props.match.params.filmName)
        .then((movies: any) => getMoviesById(movies[0].id))
        .then((movie: Movie) => {
          setMainMovie(movie);
          props.setListOnload(true);
        });
    }
  }, [props.movie]);
  useEffect(() => {
    let directorName = mainMovie?.crew?.find(
      (person: any) => person.job === 'Director'
    )?.name;
    if (directorName) {
      getMoviesByDirectorName(directorName).then((movies: Movie[]) => {
        console.log('movies by director', directorName, movies);
        setMovies(movies);
      });
    }
  }, [mainMovie]);
  return (
    <>
      <Header serchLinkHidden={false} favoriteLinkHidden={false}>
        <MovieDescription movie={mainMovie} />
      </Header>
      <main className={style.main}>
        <>
          <CnxtApp.Consumer>
            {(value) =>
              value.listOnload ? (
                <>
                  {!!movies.length && (
                    <div className={style['movies-by']}>
                      Movies by {mainMovie?.director}:
                    </div>
                  )}
                  <ListMovieCards
                    movies={movies}
                    setMovie={props.setMovie}
                    setListOnload={value.setListOnload}
                    setMovies={setMovies}
                  />
                </>
              ) : (
                <Loader />
              )
            }
          </CnxtApp.Consumer>
        </>
      </main>
    </>
  );
};
export const AboutPageWithRouter = withRouter(AboutPage);
