import calculateTicTacToeWinner from "libs/tic-tac-toe";
import { 
    play, 
    jumpTo,
} from '../actions';

const reducerInitState = {
    history: [
        {
            squares: Array(9).fill(null),
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: false,
};

function game(state = reducerInitState, {type, payload}) {
        
    switch (type) {
        case play.type: {
            const { i } = payload;
            const history = state.history.slice(0, state.stepNumber + 1);
            const current = history[history.length - 1];
            const squares = current.squares.slice();
            const winner = state.winner;

            if (winner || squares[i]) {
                return {
                    ...state,
                    winner,
                };
            }
            
            squares[i] = state.xIsNext ? 'X' : 'O';

            return {
                ...state,
                winner: calculateTicTacToeWinner(squares),
                history: history.concat([
                    { squares }
                ]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext,
            };
        }
        case jumpTo.type:
            console.log('in jump to: ', payload);
            return {
                ...state,
                stepNumber: payload.move,
                xIsNext: (payload.move % 2) === 0,
            };
        default:
            return state;
    }
}

export { game, reducerInitState };