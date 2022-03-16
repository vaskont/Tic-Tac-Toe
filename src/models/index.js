import { combineReducers } from 'redux';
import { game } from './tic-tac-toe';
import { login } from './login';

export default combineReducers({
  game,
  login,
});