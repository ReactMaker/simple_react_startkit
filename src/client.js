import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

import { AppContainer } from 'react-hot-loader';
import initialLocale from './locale';
import 'bootstrap/dist/css/bootstrap.css';

import configureStore from './redux/store';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
initialLocale(store);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);
