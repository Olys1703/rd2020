import React from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';

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
            <Link to='/'>
              <button className={style['search-btn']}>SEARCH</button>
            </Link>
          )}
        </div>
        <div>{props.children}</div>
      </div>
    </header>
  );
};
