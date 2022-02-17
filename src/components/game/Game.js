/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

import { connect } from 'react-redux';

import { Board } from 'components/board';

// import { withProps } from 'libs/model/withProps';

import {
    winner,
    history,
    xIsNext,
    jumpTo,
} from 'models/tic-tac-toe';

import './game.css';

export const Game = ({ winner, xIsNext, history, jumpTo }) => {

    const moves = history.map((step, move) => {
        const desc = move ? 
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick= {() => jumpTo(move)}>{desc}</button>
            </li>
        );
    })

    const status = winner
        ? 'Winner: ' + winner
        : 'Next player: ' + (xIsNext ? 'X' : 'O');

    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

// export default withProps(
//     {
//         winner,
//         history,
//         xIsNext,
//     },
//     {
//         jumpTo: dispatch => step => dispatch( jumpTo({ step }) ),
//     },
// )(Game);
const mapStateToProps = (state) => {
    return {
        winner: winner(state),
        history: history(state),
        xIsNext : xIsNext(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        jumpTo: dispatch => step => dispatch( jumpTo({ step }) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);