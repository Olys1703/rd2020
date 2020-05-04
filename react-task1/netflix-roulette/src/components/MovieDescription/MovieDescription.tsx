import React from 'react';
import { Movie } from '../../common/types/Movie';
import style from './movieDescription.module.scss';
export default class MovieDescription extends React.Component<
  {
    movie: Movie | undefined;
  },
  { movie: Movie | undefined }
> {
  constructor(props: {
    movieTitle: string | undefined;
    movie: Movie | undefined;
  }) {
    super(props);
    this.state = {
      movie: undefined,
    };
    if (this.props.movie) {
      this.setState({ movie: this.props.movie });
    }
  }
  componentDidMount() {}
  render() {
    return (
      <>
        {!this.state.movie ? (
          <div className={style.mock}></div>
        ) : (
          <div className={style.movie}>
            <img
              className={style.poster}
              src='https://image.tmdb.org/t/p/original/2yhg0mZQMhDyvUQ4rG1IZ4oIA8L.jpg'
              alt=''
            />
            <div className={style.description}>
              <div className={style.header}>
                <h2 className={style.title}>Pulp Fiction</h2>
                <span className={style.rating}>4.1</span>
              </div>
              <div>
                <span>1994</span>
                <span>154 min</span>
              </div>
              <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </div>
              <div>Director:</div>
              <div>
                Cast: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum."
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
