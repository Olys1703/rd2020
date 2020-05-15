import React from 'react';
import style from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <a className={style.brand} href='/'>
          netflixroulette
        </a>
      </div>
    </footer>
  );
};
