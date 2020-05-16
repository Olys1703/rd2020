import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import style from './aboutPage.module.scss';
import { Header } from '../../components/Header/Header';
import ListMovieCards from '../../components/ListMovieCards/ListMovieCards';
import { Movie } from '../../common/types/Movie';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import Loader from '../../components/Loader/Loader';
import {
  setMainMovie,
  setMovies,
  fetchMovie,
  fetchMovies,
} from '../../redux/actions';

interface IAboutPage extends RouteComponentProps<{ filmName: string }> {
  movie: Movie | undefined;
  setMovie: (movie: Movie) => void;
  setListOnload: (listOnload: boolean) => void;
}
const AboutPage: React.FC<any> = (props) => {
  useEffect(() => {
    if (props.movie) {
      props.fetchMovie(props.movie.id);
    } else {
      props.fetchMovie(props.match.params.filmName);
    }
  }, [props.movie]);
  useEffect(() => {
    let directorName = props.mainMovie?.director;
    if (directorName) {
      props.fetchMovies(directorName, 'director');
    }
  }, [props.mainMovie]);
  return (
    <>
      <Header serchLinkHidden={false} favoriteLinkHidden={false}>
        <MovieDescription />
      </Header>
      <main className={style.main}>
        <>
          {!props.loading ? (
            <>
              {!!props.movies.length && (
                <div className={style['movies-by']}>
                  Movies by {props.mainMovie?.director}:
                </div>
              )}
              <ListMovieCards />
            </>
          ) : (
            <Loader />
          )}
        </>
      </main>
    </>
  );
};
const mapDispatchToProps = {
  setMainMovie,
  setMovies,
  fetchMovie,
  fetchMovies,
};
const mapStateToProps = (state: any) => ({
  movies: state.movies.movies,
  movie: state.movies.selectedMovie,
  mainMovie: state.movies.mainMovie,
  loading: state.app.loading,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AboutPage));
