/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import axios from 'axios';

import { React, useState } from 'react';

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
    changeName,
} from 'models/login';

import './game.css';

export const Game = ({ winner, draw, xIsNext, history, name, jumpTo, changeName }) => {
    
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

    const status = winner
        ? 'Winner: ' + winner
        : draw
            ? `It's a draw!`
            : 'Next player: ' + (xIsNext ? 'X' : 'O');

    const [tempName, setTempName] = useState('');
    const [target, setTarget] = useState('');

    function update(t){
        setTempName(t.value);
        setTarget(t);
    }
    
    function submit(){
        target.value = '';
        changeName({tempName});

        const name = 'vassilis';
        const options = {
            method: 'POST',
            body: JSON.stringify(name)
        };

        fetch('http://localhost:8080/', options)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        });
    }

    const login = name
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
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <div>
                {login}
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
    },
    { 
        jumpTo,
        changeName,
    },
)(Game);