import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { Header } from '../components/Header/Header';
import ListSort from '../components/ListSort/ListSort';
import { ListMovieCards } from '../../src/components/ListMovieCards/ListMovieCards';
//import { CnxtSearchToCards } from '../../common/context';
import { Movie } from '../common/types/Movie';
import style from './aboutPage.module.scss';
import { SearchWithRouter } from '../components/Search/Search';
import MovieDescription from '../components/MovieDescription/MovieDescription';
import '../components/API/getMoviesByTItle';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import getMoviesById from '../components/API/getMovieById';
import getMoviesByTItle from '../components/API/getMoviesByTItle';
import getCreditsByMovieId from '../components/API/getCreditsByMovieId';
import getMoviesByDirectorName from '../components/API/getMoviesByDirectorName';
import { CnxtApp } from '../common/context';
import Loader from '../components/Loader/Loader';

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
        {movies.length ? (
          <>
            <CnxtApp.Consumer>
              {(value) =>
                value.listOnload ? (
                  <>
                    <div className={style['movies-by']}>
                      Movies by{' '}
                      {mainMovie?.crew
                        ?.filter((person) => person.job === 'Director')
                        .map((person) => person.name)
                        .join(', ')}
                      {':'}
                    </div>
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
        ) : (
          <div className={style['mock-list']}>No films found</div>
        )}
      </main>
    </>
  );
};
export const AboutPageWithRouter = withRouter(AboutPage);
