import {
    loginSuccess,
    loginFail,
} from './actions';

const reducerInitState = {
    name: '',
    status: '',
};

function reducerLogin(state = reducerInitState, {type, payload}) {
    switch (type) {
        case loginSuccess.type: {
            return {
                ...state,
                ...payload,
            };
        }
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