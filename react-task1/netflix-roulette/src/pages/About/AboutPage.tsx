import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import ListMovieCards from '../../components/ListMovieCards/ListMovieCards';
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
import { connect } from 'react-redux';
import { selectMovie, setMovies } from '../../redux/actions';

interface IAboutPage extends RouteComponentProps<{ filmName: string }> {
  movie: Movie | undefined;
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
}
const AboutPage: React.FC<any> /*<IAboutPage>*/ = (props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [mainMovie, setMainMovie] = useState<Movie>();
  useEffect(() => {
    props.setListOnload(false);
    if (props.movie) {
      getMoviesById(props.movie.id).then((movie: Movie) => {
        //setMainMovie(movie);
        //console.log('by id');
        props.selectMovie(movie);
        props.setListOnload(true);
      });
    } else {
      getMoviesByTItle(props.match.params.filmName)
        .then((movies: any) => getMoviesById(movies[0].id))
        .then((movie: Movie) => {
          //setMainMovie(movie);
          //console.log('by title');
          props.selectMovie(movie);
          props.setListOnload(true);
        });
    }
  }, []);
  useEffect(() => {
    let directorName = mainMovie?.director;
    console.log('director: ', directorName, props.movie);
    if (directorName) {
      getMoviesByDirectorName(directorName).then((movies: Movie[]) => {
        console.log('movies by director', directorName, movies);
        props.setMovies(movies);
      });
    }
  }, [props.movie]);
  return (
    <>
      <Header serchLinkHidden={false} favoriteLinkHidden={false}>
        <MovieDescription />
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
                  <ListMovieCards />
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
const mapDispatchToProps = {
  selectMovie,
  setMovies,
};
const mapStateToProps = (state: any) => ({
  movie: state.movies.selectedMovie,
});
export const AboutPageWithRouter = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutPage));
