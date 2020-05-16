import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import style from './search.module.scss';
import { Movie } from '../../common/types/Movie';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../../redux/actions';

interface ISearch extends RouteComponentProps<{ query: string }> {
  setMovies: (movies: Movie[]) => void;
  setListOnload: (listOnload: boolean) => void;
}

const Search: React.FC<any> = (props) => {
  const dispatch = useDispatch();

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
    dispatch(fetchMovies(inputValue, searchProps));
  }, [movieName]);

  return (
    <form
      className={style.search}
      onSubmit={(event: FormEvent | KeyboardEvent) => {
        event.preventDefault();
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

export default withRouter(Search);
