import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';
import { AboutPageWithRouter } from './pages/AboutPage';
import style from './app.module.scss';
import { Movie } from './common/types/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FavoriteMoviesPage from './pages/FavoriteMoviesPage';
import { CnxtApp } from './common/context';

function App() {
  const [movie, setMovie] = useState<Movie>();
  const [listOnload, setListOnload] = useState<boolean>(true);
  return (
    <CnxtApp.Provider
      value={{
        setMovie: setMovie,
        listOnload: listOnload,
        setListOnload: setListOnload,
      }}
    >
      <div className={style.wrapper}>
        <Router>
          <Switch>
            <Route path='/film/:filmName'>
              <AboutPageWithRouter
                setListOnload={setListOnload}
                movie={movie}
                setMovie={setMovie}
              />
            </Route>
            <Route path='/search/:query'>
              <SearchPage setMovie={setMovie} />
            </Route>
            <Route path='/favorite'>
              <FavoriteMoviesPage />
            </Route>
            <Route exact path='/'>
              <SearchPage setMovie={setMovie} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </CnxtApp.Provider>
  );
}

export default App;
