import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import style from './search.module.scss';
import { CnxtSearchToCards } from '../../common/context';

type SearchProps = {
  defMovieName?: string;
};

export const Search: React.FC = () => {
  const [movieName, setMovieName] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    setMovieName(inputValue);
  }

  useEffect(() => {
    /*fetch(`http://www.omdbapi.com/?apikey=634977a1&s=${movieName}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });*/
  }, [movieName]);
  return (
    <CnxtSearchToCards.Consumer>
      {(value) => (
        <form
          className={style.search}
          onSubmit={(event: FormEvent) => {
            event.preventDefault();
            value.setMovie(inputValue);
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
          />
          <label htmlFor='searchControl'></label>
          <div>
            <span>SEARCH BY</span>
            <button
              className={style.btn}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              TITLE
            </button>
            <button
              className={style.btn}
              onClick={(event) => {
                event.preventDefault();
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
      )}
    </CnxtSearchToCards.Consumer>
  );
};
