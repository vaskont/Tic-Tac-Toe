import {
    request
} from "./actions";

const requestEpic = action$ => action$.pipe(
    ofType(request.type),
    mergeMap(({ payload: { url, handler } }) => {
        return fetch(url).then(async response => {
            let json = await response.json();
            return invoke(handler, json);
        });
    }),
);
