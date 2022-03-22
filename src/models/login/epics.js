import { ofType } from "redux-observable";

import { map } from "rxjs/operators";

import {
    changeName,
    changeNameSuccess,
} from "./actions";

const changeNameEpic = action$ => action$.pipe(
    ofType(changeName.type),
    map(({ payload }) => {
        return changeNameSuccess({
            name: payload.tempName,
        });
    }),
);

export { changeNameEpic };