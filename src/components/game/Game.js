/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import { Board } from 'components/board';

import { createStructuredSelector } from 'reselect';

import { withProps } from 'libs/model';

import {
    winner,
    history,
    xIsNext,
    name,
    jumpTo,
    changeName,
} from 'models/tic-tac-toe';

import './game.css';

export const Game = ({ winner, xIsNext, history, name, jumpTo, changeName }) => {
    
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
        : 'Next player: ' + (xIsNext ? 'X' : 'O');

    let tempName = '';
    let target = '';

    function myfunc(t){
        tempName = t.value;
        target = t;
    }

    function submitF(){
        target.value = '';
        changeName({tempName});
    }

    const login = name
        ? <div className='login'>
            <span>Hello, {name}</span>
            <input type='text' name='name' size='15' onChange={({ target }) => myfunc(target)}/>
            <button onClick={submitF} >Change name</button>
        </div>
        : <div className='login'>
            <label>Please enter your name: 
                <input name='name' id='name' onChange={({ target }) => myfunc(target)}/>
                <input type='submit' name='button' onClick={submitF} />
            </label>
        </div>
    

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
    history,
    xIsNext,
    name,
    },
    { 
        jumpTo,
        changeName,
    },
)(Game);

// export default withProps(
//     {
//         winner,
//         history,
//         xIsNext,
//     },
//     {
//         jumpTo,
//     },
// )(Game);


// const mapStateToProps = (state) => {
//     return {
//         winner: winner(state),
//         history: history(state),
//         xIsNext : xIsNext(state),
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         jumpTo: (move) => dispatch( jumpTo({move}) ),
//     };
// };

// export default connect(mapStateToProps, { jumpTo })(Game);

// export default connect( 
//     createStructuredSelector({
//         winner,
//         history,
//         xIsNext,
//     }),
//     { jumpTo },
// )(Game);