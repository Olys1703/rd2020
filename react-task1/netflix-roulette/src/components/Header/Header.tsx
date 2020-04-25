import React from 'react';
import { Search } from '../Search/Search';
import style from './header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style['concord-img-gradient']}></div>
      <div className={style.container}>
        <div>
          <a className={style.brand} href='/'>
            netflixroulette
          </a>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
};
