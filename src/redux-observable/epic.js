import { filter, mapTo } from 'rxjs/operators';

const myEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    mapTo({type: ' PONG'})
);

export default myEpic;