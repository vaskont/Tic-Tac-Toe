/* eslint-disable no-unused-vars */
import { 
  applyMiddleware,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer, reducerInitState } from 'models/tic-tac-toe';

function configureStore(preloadedState) {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducer, preloadedState, composedEnhancers)

  return store
}

// const store = configureStore(reducerInitState);
const store = createStore(reducer);
console.log('Store created!', store.getState());
export default store;