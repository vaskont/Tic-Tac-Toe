/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';

import { Board } from 'components/board';

import { LoginChange } from 'components/loginChange';

import { LoginStart } from 'components/loginStart';

import { withProps } from 'libs/model';

import {
    winner,
    draw,
    history,
    xIsNext,
    jumpTo,
} from 'models/tic-tac-toe';

import {
    name,
    status,
    login,
} from 'models/login';

import './game.css';

export const Game = ({ winner, draw, xIsNext, history, name, status, jumpTo, login }) => {
    
    const [tempName, setTempName] = useState('');
    const [target, setTarget] = useState('');

    useEffect(
        () => {
            if(status === 'fail'){
                setTempName('');
            }
        },
        [status],
    );

    const moves = history.map((step, move) => {
        const desc = move ? 
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick= {() => jumpTo({move})}>{desc}</button>
            </li>
        );
    })

    const winStatus = winner
        ? 'Winner: ' + winner
        : draw
            ? `It's a draw!`
            : 'Next player: ' + (xIsNext ? 'X' : 'O');

    function update(t){
        setTempName(t.value);
        setTarget(t);
    }
    
    function submit(){
        target.value = '';
        login({tempName}); 
    }

    const loginView = name
        ? <LoginChange 
            name={name}
            update={update}
            submit={submit}
        />
        : <LoginStart 
            update={update}
            submit={submit}
        />

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{winStatus}</div>
                <ol>{moves}</ol>
            </div>
            <div>
                {loginView}
            </div>
        </div>
    );
};

export default withProps({
    winner,
    draw,
    history,
    xIsNext,
    name,
    status,
    },
    { 
        jumpTo,
        login,
    },
)(Game);