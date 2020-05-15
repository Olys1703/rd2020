import React, { useState } from 'react';
import { Footer } from './components/Footer/Footer';
import SearchPage from './pages/Search/SearchPage';
import { AboutPageWithRouter } from './pages/About/AboutPage';
import style from './app.module.scss';
import { Movie } from './common/types/Movie';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FavoriteMoviesPage from './pages/Favorite/FavoriteMoviesPage';
import { CnxtApp } from './common/context';
import { createStore, applyMiddleware } from 'redux'; //redux
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); //redux

function App() {
  const [movie, setMovie] = useState<Movie>();
  const [listOnload, setListOnload] = useState<boolean>(true);
  return (
    <Provider store={store}>
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
                  //movie={movie}
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
    </Provider>
  );
}

export default App;
