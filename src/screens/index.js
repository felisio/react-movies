/* @flow */
import React from "react";
import { Route, Link } from "react-router-dom";

import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const paths = [
  { path: "/movie/list", component: MovieList },
  { path: "/movie/detail", component: MovieDetail }
];

const _renderRoute = (paths: Array) => {
  return paths.map(path => <Route {...path} />);
};

const App = () => (
  <div className="App">
    <h1>Movies</h1>
    <ul>
      <li>
        <Link to="/movie/list">Movie List</Link>
      </li>
      <li>
        <Link to="/movie/detail">Movie details</Link>
      </li>
    </ul>
    <div>{_renderRoute(paths)}</div>
  </div>
);

export default App;
