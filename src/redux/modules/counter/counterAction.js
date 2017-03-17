import { createAction } from 'redux-actions';
import types from './counterConstant';

export default {
  increment: createAction(types.INCREMENT),
  decrement: createAction(types.DECREMENT),
}
