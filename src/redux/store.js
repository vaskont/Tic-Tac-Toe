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

const store = configureStore(reducerInitState);
console.log('Created store 1: ', store.getState());
export default store;