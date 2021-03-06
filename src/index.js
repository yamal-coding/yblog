import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './pages/detail';
import Home from './pages/home';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/yblog" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
