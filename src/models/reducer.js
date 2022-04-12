import { combineReducers } from 'redux';
import { reducerGame } from './tic-tac-toe';
import { reducerLogin } from './login';

export default combineReducers({
  game: reducerGame,
  login: reducerLogin,
});