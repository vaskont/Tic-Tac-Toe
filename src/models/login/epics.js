import { request } from "models/system";
import { ofType } from "redux-observable";

import { mergeMap } from "rxjs/operators";

import {
    login,
    loginSuccess,
    loginFail,
} from "./actions";

const loginEpic = action$ => action$.pipe(
    ofType(login.type),
    mergeMap(({ payload }) => {
        const { tempName: name } = payload;

        return fetch(`http://localhost:8080/login?username=${name}`)
        .then(async response => {
            let json = await response.json();
            console.log(json.loginResult);
            return (
                json.loginResult
                    ? loginSuccess({
                            name,
                            status: 'success',
                        })
                    : loginFail({
                        status: 'fail',
                    })
            );
        }); 
    }),
);

const loginEpic2 = action$ => action$.pipe(
    ofType(login.type),
    mergeMap(({ payload }) => {
        const { tempName: name } = payload;

        return request({
            url: `http://localhost:8080/login?username=${name}`,
            handler: ({ loginResult }) => loginResult 
                ? loginSuccess({ name, status: "success" })
                : loginFail({ status: "fail" }),
        });
    }),
);

export { loginEpic };