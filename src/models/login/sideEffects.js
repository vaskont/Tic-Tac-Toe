import { register } from "libs/funcInvocator";

import {
    loginSuccess,
    loginFail,
} from "./actions";

const LOGIN_HANDLER = 'loginHandler';

register(
    LOGIN_HANDLER,
    ({ loginResult }) => loginResult
        ? loginSuccess({ name: loginResult.name, status: "success" })
        : loginFail({ status: "fail" }),
);

export {LOGIN_HANDLER};