import React from 'react';

import { Game } from 'components/game';

import { Provider } from 'react-redux';

import store from 'redux/store';

import './app.css';

function App() {

    return (
        <Provider
            store={store}
        >
            <Game />
        </Provider>
    );
  }

export default App;