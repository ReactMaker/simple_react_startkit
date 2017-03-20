import { createAction } from 'redux-actions';
import types from './counterConstant';

export default {
  increment: createAction(types.INCREMENT),
  decrement: createAction(types.DECREMENT),
  delayIncrement: createAction(types.DELAY_INCREMENT),
  callApi: createAction(types.CALL_API),
};
