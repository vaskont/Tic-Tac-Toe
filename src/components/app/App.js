import React, { useReducer } from 'react';

import { Game } from 'components/game';

import { 
    reducer, 
    reducerInitState,
} from 'models/tic-tac-toe';

import { Provider } from 'libs/model';

import './app.css';

function App() {

    const [state, dispatch] = useReducer(reducer, reducerInitState);

    return (
        <Provider 
            value={{
                state,
                dispatch,
            }}
        >
            <Game />
        </Provider>
    );
  }

export default App;