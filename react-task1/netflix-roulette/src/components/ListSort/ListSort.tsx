import React from 'react';
import style from './listSort.module.scss';
import { connect } from 'react-redux';
import { setMovies } from '../../redux/actions';

class ListSort extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      rise: null,
      sortKey: null,
    };
  }
  sortMovies(sortKey: string, rise: boolean) {
    const movies = this.props.movies.concat();
    movies.sort((a: any, b: any) => {
      return rise ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    });
    this.setState({
      rise: rise,
      sortKey: sortKey,
    });
    this.props.setMovies(movies);
  }
  render() {
    return (
      <div className={style.filter}>
        <div className={style.counter}>
          <span>{this.props.movies.length} movies found</span>
        </div>
        <div className={style.sort}>
          <span>Sort by:</span>
          <button
            className={[
              style.btn,
              this.state.sortKey === 'release_year' ? style['active'] : '',
            ].join(' ')}
            onClick={() => {
              this.sortMovies('release_year', !this.state.rise);
            }}
          >
            <div className={style['btn-name']}>release date</div>
            <div className={style.rise}>
              <div
                className={[
                  style['rise-up'],
                  this.state.rise ? style['active'] : '',
                ].join(' ')}
              >
                &#10148;
              </div>
              <div
                className={[
                  style['rise-down'],
                  !this.state.rise ? style['active'] : '',
                ].join(' ')}
              >
                &#10148;
              </div>
            </div>
          </button>
          <button
            className={[
              style.btn,
              this.state.sortKey === 'vote_average' ? style['active'] : '',
            ].join(' ')}
            onClick={() => {
              this.sortMovies('vote_average', !this.state.rise);
            }}
          >
            <div className={style['btn-name']}>rating</div>
            <div className={style.rise}>
              <div
                className={[
                  style['rise-up'],
                  this.state.rise ? style['active'] : '',
                ].join(' ')}
              >
                &#10148;
              </div>
              <div
                className={[
                  style['rise-down'],
                  !this.state.rise ? style['active'] : '',
                ].join(' ')}
              >
                &#10148;
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  setMovies,
};
const mapStateToProps = (state: any) => ({
  movies: state.movies.movies,
});
export default connect(mapStateToProps, mapDispatchToProps)(ListSort);
