import React from 'react';
import { Footer } from './components/Footer/Footer';
import SearchPage from './pages/Search/SearchPage';
import AboutPage from './pages/About/AboutPage';
import style from './app.module.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FavoriteMoviesPage from './pages/Favorite/FavoriteMoviesPage';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className={style.wrapper}>
        <Router>
          <Switch>
            <Route path='/film/:filmName'>
              <AboutPage />
            </Route>
            <Route path='/search/:query'>
              <SearchPage />
            </Route>
            <Route path='/favorite'>
              <FavoriteMoviesPage />
            </Route>
            <Route exact path='/'>
              <SearchPage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
