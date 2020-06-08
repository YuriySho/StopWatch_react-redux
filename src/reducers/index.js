import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index';

const interval = handleActions({
  [actions.changeInterval](state, { payload: { interval } }) {
    const newInterval = state + interval;
    return newInterval;
  }
}, 1);

export default combineReducers({ interval });