import {
    loginSuccess,
    loginFail,
} from './actions';

const reducerInitState = {
    name: '',
    status: '',
};

function reducerLogin({ type, payload }, state = reducerInitState) {
    switch (type) {
        case loginSuccess.type: 
        case loginFail.type: {
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