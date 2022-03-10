import { changeName } from '../actions';

const reducerInitState = {
    history: [
        {
            squares: Array(9).fill(null),
        }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: false,
    name: '', 
};

function login(state = reducerInitState, {type, payload}) {
        
    switch (type) {
        case changeName.type: {

            return {
                ...state,
                name: payload.name,
            };
        }
        default:
            return state;
    }
}

export { login, reducerInitState };