import React from 'react';
import style from './header.module.scss';
import { Link } from 'react-router-dom';

export const Header: React.FC<{
  serchLinkHidden: boolean;
  favoriteLinkHidden: boolean;
}> = (props) => {
  return (
    <header className={style.header}>
      <div className={style['concord-img-gradient']}></div>
      <div className={style.container}>
        <div>
          <a className={style.brand} href='/'>
            netflixroulette
          </a>
          {!props.serchLinkHidden && (
            <Link to='/'>
              <button className={style['search-btn']}>SEARCH</button>
            </Link>
          )}
          {!props.favoriteLinkHidden && (
            <Link to='/favorite'>
              <button className={style['favorite-btn']}>FAVORITE</button>
            </Link>
          )}
        </div>
        <div>{props.children}</div>
      </div>
    </header>
  );
};
