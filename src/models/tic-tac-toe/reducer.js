import { 
    playSuccess,
    jumpToSuccess,
} from './actions';

const reducerInitState = {
    history: [
        {
            squares: Array(9).fill(null),
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: false,
    draw: false,
};

function reducerGame(state = reducerInitState, { type, payload }) {
        
    switch (type) {
        case playSuccess.type: {
            return {
                ...state,
                ...payload,
            };
        }
        case jumpToSuccess.type: {
            return {
                ...state,
                ...payload,
            };
        }
        default:
            return state;
    }
}

export { reducerGame, reducerInitState };