export { reducerGame, reducerInitState } from './reducer';

export {
    winner,
    draw,
    xIsNext,
    squares,
    history,
    square,
} from './selectors';

export { 
    play,
    jumpTo,
} from './actions';

export { playEpic, jumpToEpic } from './epics';