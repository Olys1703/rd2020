import React, { useState } from 'react';
import SearchMoviePage from './components/SearchMoviePage/SearchMoviePage';
import { Footer } from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';
import { AboutPageWithRouter } from './pages/AboutPage';
import style from './app.module.scss';
import { Movie } from './common/types/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [movie, setMovie] = useState<Movie>();
  const [moviesOnload, setMoviesOnload] = useState<boolean>();
  return (
    <div className={style.wrapper}>
      <Router>
        <Switch>
          <Route path='/film/:filmName'>
            <AboutPageWithRouter movie={movie} setMovie={setMovie} />
          </Route>
          <Route path='/search/:query'>
            <SearchPage setMovie={setMovie} />
          </Route>
          <Route exact path='/'>
            <SearchPage setMovie={setMovie} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
