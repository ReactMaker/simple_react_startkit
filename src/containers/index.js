import React from 'react';
// import package
import { Router, Route, hashHistory } from 'react-router';
// import relative path
import Home from './Home';
import NotFound from './NotFound';

// add router key to fix this issue
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-275576250
const Main = () => (
  <Router key={Math.random()} history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Main;
