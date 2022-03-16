/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';

import { Board } from 'components/board';

import { Login_change } from 'components/login_change';

import { Login_start } from 'components/login_start';

import { withProps } from 'libs/model';

import {
    winner,
    history,
    xIsNext,
    jumpTo,
} from 'models/tic-tac-toe';

import {
    name,
    changeName,
} from 'models/login';

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

    const { squares: last } = history[history.length - 1];
    const draw = last.filter(x => x === null);

    const status = winner
        ? 'Winner: ' + winner
        : draw.length
            ? 'Next player: ' + (xIsNext ? 'X' : 'O')
            : `It's a draw!`;


    const [tempName, setTempName] = useState('');
    const [target, setTarget] = useState('');

    function update(t){
        setTempName(t.value);
        setTarget(t);
    }
    
    function submit(){
        target.value = '';
        changeName({tempName});
    }

    const login = name
        ? <Login_change 
            name={name}
            update={update}
            submit={submit}
        />
        : <Login_start 
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