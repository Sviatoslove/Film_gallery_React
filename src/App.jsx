import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import LikedFilmsPage from 'pages/LikedFilmsPage';
import FilmPage from 'pages/FilmPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/liked" component={LikedFilmsPage} />
      <Route path="/film/:filmId" component={FilmPage} />
    </Switch>
  </Router>
);

export default App;
