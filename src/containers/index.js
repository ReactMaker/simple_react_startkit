import React from 'react';
// import package
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import relative path
import Loading from './Loading';
import NotFound from './NotFound';

const LoadComponent = loader => Loadable({
  loader,
  loading: Loading,
})

const Home = LoadComponent(() => import('./Home'));

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
