import React from 'react';
import SearchMoviePage from './components/SearchMoviePage/SearchMoviePage';
import { Footer } from './components/Footer/Footer';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.wrapper}>
      <SearchMoviePage />
      <Footer />
    </div>
  );
}

export default App;
