import { changeNameSuccess } from './actions';

const reducerInitState = {
    name: '', 
};

function reducerLogin(state = reducerInitState, {type, payload}) {
    switch (type) {
        case changeNameSuccess.type: {
            return {
                ...state,
                ...payload,
            };
        }
        default:
            return state;
    }
}

export { reducerLogin, reducerInitState };