import {
    loginSuccess,
    loginFail,
} from './actions';

const reducerInitState = {
    name: '', 
};

function reducerLogin(state = reducerInitState, {type, payload}) {
    switch (type) {
        case loginSuccess.type: {
            console.log('inside loginSuccess!');
            console.log(payload);
            return {
                ...state,
                ...payload,
            };
        }
        case loginFail.type: {
            return state;
        }
        default:
            return state;
    }
}

export { reducerLogin, reducerInitState };