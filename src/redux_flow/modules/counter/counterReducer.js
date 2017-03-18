import { handleActions } from 'redux-actions';
import types from './counterConstant';

const initialState = {
  num: 0,
};

export default handleActions({
  [types.INCREMENT]: (state, { payload }) => ({
    ...state,
    num: state.num + payload,
  }),
  [types.DECREMENT]: (state, { payload }) => ({
    ...state,
    num: state.num - payload,
  }),
}, initialState);
