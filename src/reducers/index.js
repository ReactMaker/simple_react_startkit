/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';
import { i18nReducer } from 'redux-react-i18n';
import { routerReducer } from 'react-router-redux';

const reducers = {
  i18n: i18nReducer,
  routing: routerReducer,
};
const combined = combineReducers(reducers);
module.exports = combined;
