/* eslint-disable no-unused-vars */
import { 
  applyMiddleware,
  createStore,
} from 'redux';

import reducer from 'models/reducer';

import { createEpicMiddleware } from 'redux-observable';

import { epics } from 'models/epics';

const epicMiddleware = createEpicMiddleware();

function configureStore() {
  const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
  );

  epicMiddleware.run(epics);

  return store;
}

const store = configureStore();

export default store;