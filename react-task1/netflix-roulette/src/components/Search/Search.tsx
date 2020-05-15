import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import style from './search.module.scss';
import { Movie } from '../../common/types/Movie';
import getMoviesByDirectorName from '../API/getMoviesByDirectorName';
import getMoviesByTItle from '../API/getMoviesByTItle';

interface ISearch extends RouteComponentProps<{ query: string }> {
  setMovies: (movies: Movie[]) => void;
  setListOnload: (listOnload: boolean) => void;
}

const Search: React.FC<ISearch> = (props) => {
  const [movieName, setMovieName] = useState<{ name: string }>();
  const [inputValue, setInputValue] = useState<string>('');
  const [searchProps, setSearchProps] = useState<string>('title');

  useEffect(() => {
    let query = props.match.params.query ? props.match.params.query : '';
    setInputValue(query);
    setMovieName({ name: query });
  }, []);
  useEffect(() => {
    if (inputValue === '') {
      return;
    }
    props.setListOnload(false);
    if (searchProps === 'title') {
      getMoviesByTItle(inputValue).then((movies: any) => {
        props.setMovies(movies);
        props.setListOnload(true);
      });
    }
    if (searchProps === 'director') {
      getMoviesByDirectorName(inputValue).then((movies: any) => {
        props.setMovies(movies);
        props.setListOnload(true);
      });
    }
  }, [movieName]);

  return (
    <form
      className={style.search}
      onSubmit={(event: FormEvent | KeyboardEvent) => {
        event.preventDefault();
        console.log(props);

        props.history.push(`/search/${inputValue}`);

        setMovieName({ name: inputValue });
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
        placeholder={`Search movie by ${searchProps}`}
      />
      <label htmlFor='searchControl'></label>
      <div>
        <span>SEARCH BY</span>
        <button
          className={[
            style.btn,
            searchProps === 'title' ? style.active : '',
          ].join(' ')}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            setSearchProps('title');
            //setMovieName('');
          }}
        >
          TITLE
        </button>
        <button
          className={[
            style.btn,
            searchProps === 'director' ? style.active : '',
          ].join(' ')}
          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();
            setSearchProps('director');
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
