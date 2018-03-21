import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from 'containers/';

ReactDOM.render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById('app')
);

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
if (module.hot) {
  module.hot.accept('containers/', () => {
    const NewMain = require('containers/').default;
    ReactDOM.render(
      <AppContainer>
        <NewMain />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
