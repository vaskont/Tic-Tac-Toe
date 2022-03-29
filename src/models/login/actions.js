import { Action } from 'libs/model';

const login = Action('LOGIN');
const loginSuccess = Action('LOGIN_SUCCESS');
const loginFail = Action('LOGIN_FAIL');

export {
    login,
    loginSuccess,
    loginFail,
};