import { reducerInitState } from './reducers/game';
import reducer from './reducers/index';
export { reducer, reducerInitState };

export {
    winner,
    xIsNext,
    squares,
    history,
    square,
    name,
} from './selectors';

export { 
    play,
    jumpTo,
    changeName,
} from './actions';