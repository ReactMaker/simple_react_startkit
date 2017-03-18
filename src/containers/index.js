/**
 *  Point of contact for container modules
 *
 *  ie: import { App } from 'containers';
 *
 */
/**/
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { Provider } from 'react-redux';
// import package
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import webpack alias path
import configureStore from 'redux_flow/store';
import initialLocale from 'locale/';
// import relative path
import App from './App';
import Home from './Home';
import NotFound from './NotFound';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
initialLocale(store);

// add router key to fix this issue
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-275576250
const Main = () => (
  <Provider store={store}>
    <Router key={Math.random()} history={history}>
      <Route path="/" component={App}>
        { /* Main route */}
        <IndexRoute component={Home} />
        { /* Routes */}

        { /* Catch all route */}
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default Main;
