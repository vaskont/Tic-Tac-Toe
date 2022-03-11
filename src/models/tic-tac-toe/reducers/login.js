import { changeName } from '../actions';

const reducerInitState = {
    name: 'vassilis', 
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