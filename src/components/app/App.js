import React/*, { useReducer }*/ from 'react';
import { createStore } from 'redux';

import { Game } from 'components/game';

import { 
    reducer, 
    /*reducerInitState,*/
} from 'models/tic-tac-toe';

import { Provider } from 'react-redux';
//import { Provider } from 'libs/model';

import './app.css';

function App() {

    //const [state, dispatch] = useReducer(reducer, reducerInitState);

    const store = createStore(reducer);

    return (
        <Provider 
            // value={{
            //     state,
            //     dispatch,
            // }}
            store={store}
        >
            <Game />
        </Provider>
    );
  }

export default App;