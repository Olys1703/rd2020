import React, { FormEvent, useState, ChangeEvent, useEffect } from 'react';
import style from './search.module.scss';
import { Movie } from '../../common/types/Movie';
import { CnxtSearchToCards } from '../../common/context';
import { ApiData } from './ApiData';

export const Search: React.FC<{
  setMovies: (movies: Movie[]) => void;
}> = (props) => {
  const [movieName, setMovieName] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [searchProps, setSearchProps] = useState<string>('movie');
  const genres = ApiData.genres;
  // function submitHandler(event: FormEvent) {
  //   event.preventDefault();
  //   setMovieName(inputValue);
  // }
  function setReleaseYear(movies: any) {
    return movies.map((movie: any) => {
      let releaseDate = new Date(movie.release_date);
      movie.release_year = releaseDate.getFullYear();
      movie.genres = subtitleGenre(movie.genre_ids);
      return movie;
    });
  }
  function findMovies(searchProps: { name: string; type: string }) {
    const apiUrl = ApiData.url;
    const apiKey = ApiData.key;
    if (searchProps.type === 'person') {
      fetch(
        apiUrl +
          'search/' +
          searchProps.type +
          `?api_key=${apiKey}&query=${searchProps.name}`
      )
        .then((data) => data.json())
        .then((json) => {
          return json.results[0].id;
        })
        .then((id) =>
          fetch(
            apiUrl + 'person/' + id + '/combined_credits' + `?api_key=${apiKey}`
          )
        )
        .then((data) => data.json())
        .then((json) => {
          let movies = setReleaseYear(json.crew);
          console.log(movies);
          props.setMovies(
            movies.filter((movie: any) => movie.job === 'Director')
          );
        });
    }
    if (searchProps.type === 'movie') {
      fetch(
        apiUrl +
          'search/' +
          searchProps.type +
          `?api_key=${apiKey}&query=${searchProps.name}`
      )
        .then((data) => data.json())
        .then((json) => {
          let movies = setReleaseYear(json.results);
          console.log(movies);
          props.setMovies(movies);
        });
    }
  }
  function subtitleGenre(geners: number[]) {
    return geners.map((genre) => {
      return genres.find((item) => item.id === genre);
    });
  }
  useEffect(() => {
    if (movieName === '') {
      return;
    }
    findMovies({ name: inputValue, type: searchProps });
  }, [movieName]);
  return (
    <form
      className={style.search}
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        setMovieName(inputValue);
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
            setMovieName('');
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
            setMovieName('');
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
