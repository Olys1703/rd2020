import React, { useState } from 'react';
import SearchMoviePage from './components/SearchMoviePage/SearchMoviePage';
import { Footer } from './components/Footer/Footer';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
import style from './app.module.scss';
import { Movie } from './common/types/Movie';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [movie, setMovie] = useState<Movie>();
  return (
    <div className={style.wrapper}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <SearchPage />
          </Route>
          <Route path='/film'>
            <AboutPage movie={movie} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
