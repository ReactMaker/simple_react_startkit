import { combineReducers } from 'redux';
import { i18nReducer } from 'redux-react-i18n';
import { routerReducer } from 'react-router-redux';

import counter from './modules/counter/counterReducer';

const rootReducers = combineReducers({
  i18n: i18nReducer,
  routing: routerReducer,
  counter,
});

export default rootReducers;
