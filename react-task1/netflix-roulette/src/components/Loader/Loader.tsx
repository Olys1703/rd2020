import React from 'react';
import style from './loader.module.scss';

const Loader: React.FC = () => (
  <div className={style.wrapper}>
    <div className={[style.circle, style['circle-1']].join(' ')}></div>
    <div className={[style.circle, style['circle-1a']].join(' ')}></div>
    <div className={[style.circle, style['circle-2']].join(' ')}></div>
    <div className={[style.circle, style['circle-3']].join(' ')}></div>
    <div className={style.title}>Loading...</div>
  </div>
);
export default Loader;
