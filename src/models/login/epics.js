import { request } from "models/system";
import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import {
    login,
} from "./actions";

import { LOGIN_HANDLER } from "./sideEffects";

const loginEpic = action$ => action$.pipe(
    ofType(login.type),
    mergeMap(({ payload }) => {
        const { tempName: name } = payload;

        return request({
            url: `http://localhost:8080/login?username=${name}`,
            handler: LOGIN_HANDLER,
        });
    }),
);

export { loginEpic };