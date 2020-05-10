import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import style from './search.module.scss';
import { Movie } from '../../common/types/Movie';
import getMoviesByDirectorName from '../API/getMoviesByDirectorName';
import getMoviesByTItle from '../API/getMoviesByTItle';

interface ISearch extends RouteComponentProps<{ query: string }> {
  setMovies: (movies: Movie[]) => void;
}

const Search: React.FC<ISearch> /*{
  setMovies: (movies: Movie[]) => void;
}>*/ = (
  props
) => {
  const [movieName, setMovieName] = useState<{ name: string }>();
  const [inputValue, setInputValue] = useState<string>('');
  const [searchProps, setSearchProps] = useState<string>('movie');
  let query = props.match.params.query ? props.match.params.query : '';

  useEffect(() => {
    setInputValue(query);
    setMovieName({ name: query });
  }, []);
  useEffect(() => {
    //console.log(query);
    if (inputValue === '') {
      return;
    }
    if (searchProps === 'movie') {
      getMoviesByTItle(inputValue).then((movies: any) => {
        props.setMovies(movies);
      });
    }
    if (searchProps === 'person') {
      getMoviesByDirectorName(inputValue).then((movies: any) => {
        props.setMovies(movies);
      });
    }
  }, [movieName]);

  return (
    <form
      className={style.search}
      onSubmit={(event: FormEvent | KeyboardEvent) => {
        event.preventDefault();
        if (props.location.pathname === '/') {
          props.history.push('search/');
          props.history.push(inputValue);
        } else {
          props.history.replace(inputValue);
        }
        setMovieName({ name: inputValue });
        //value.findMovies({ name: inputValue, type: searchProps });
      }}
    >
      <h3>FIND YOUR MOVIE</h3>
      <input
        className={style.control}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
        id='searchControl'
        type='text'
        required
        value={inputValue}
      />
      <label htmlFor='searchControl'></label>
      <div>
        <span>SEARCH BY</span>
        <button
          className={[
            style.btn,
            searchProps === 'movie' ? style.active : '',
          ].join(' ')}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            setSearchProps('movie');
            //setMovieName('');
          }}
        >
          TITLE
        </button>
        <button
          className={[
            style.btn,
            searchProps === 'person' ? style.active : '',
          ].join(' ')}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            setSearchProps('person');
            //setMovieName('');
          }}
        >
          DIRECTOR
        </button>
        <button
          className={[style.submit, style.btn, 'lg'].join(' ')}
          type={'submit'}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};
export const SearchWithRouter = withRouter(Search);
