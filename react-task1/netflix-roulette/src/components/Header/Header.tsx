import React from 'react';
import { Search } from '../Search/Search';
import style from './header.module.scss';

export const Header: React.FC<{ barHidden: boolean }> = (props) => {
  return (
    <header className={style.header}>
      <div className={style['concord-img-gradient']}></div>
      <div className={style.container}>
        <div>
          <a className={style.brand} href='/'>
            netflixroulette
          </a>
          {props.barHidden && (
            <button className={style['search-btn']}>SEARCH</button>
          )}
        </div>
        <div>{props.children}</div>
      </div>
    </header>
  );
};
