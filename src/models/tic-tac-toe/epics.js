import { ofType } from "redux-observable";

import { map } from "rxjs/operators";

import calculateTicTacToeWinner from "libs/tic-tac-toe";

import { 
    play,
    playSuccess,
    jumpTo,
    jumpToSuccess,
} from './actions';

const playEpic = (action$, state$) => action$.pipe(
    ofType(play.type),
    map(({ payload: { i } }) => {
        const { game: state } = state$.value;
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = state.winner;

        if (winner || squares[i]) {
            return playSuccess({
                winner,
            });
        }
        
        squares[i] = state.xIsNext ? 'X' : 'O';

        const nulls = squares.filter(x => x === null);
        const draw = nulls.length === 0;

        return playSuccess({
            winner: calculateTicTacToeWinner(squares),
            draw,
            history: history.concat([
                { squares }
            ]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext,
        });
    }),
);

const jumpToEpic = (action$, state$) => action$.pipe(
    ofType(jumpTo.type),
    map(({ payload }) => {
        const { game: state } = state$.value;
        const history = state.history.slice(0, payload.move + 1);
        const winner = calculateTicTacToeWinner(history[history.length - 1].squares);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        const nulls = squares.filter(x => x === null);
        const draw = nulls.length === 0;

        return jumpToSuccess({
            winner,
            draw,
            history,
            stepNumber: payload.move,
            xIsNext: (payload.move % 2) === 0,
        });
    }),
);

export { playEpic, jumpToEpic };