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
        const { name } = payload;

        fetch(`http://localhost:8080/login?username=${name}`)
        .then(async response => {
            console.log('Success: ');
            let json = await response.json();

            return (
                json.loginSuccess
                    ? loginSuccess({
                            name,
                        })
                    : loginFail()
            );
        }); 
    }),
);

export { loginEpic };