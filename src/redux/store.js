/* eslint-disable no-unused-vars */
import { 
  applyMiddleware,
  createStore,
} from 'redux';

import reducer from 'models/reducer';

import { createEpicMiddleware } from 'redux-observable';

import myEpic from 'redux-observable/epic';

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(myEpic);

  return store
}

const store = configureStore();

export default store;