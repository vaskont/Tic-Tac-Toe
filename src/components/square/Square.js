/* eslint-disable react/prop-types */
import React from 'react'

import { withProps } from 'libs/model';

import {
    square,
    play,
} from 'models/tic-tac-toe';

import './square.css';

export const Square = ({ index, value, play }) => {
    return (
        <button className="square" onClick={() => play(index)}>
            {value}
        </button>
    );
}

export default withProps(
    {
        value: (state, props) => square(state)(props.index),
    },
    {
        play: dispatch => i => dispatch(play({ i })),
    },
)(Square);