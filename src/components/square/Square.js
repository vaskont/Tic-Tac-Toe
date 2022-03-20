/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

import {
    square,
    play,
} from 'models/tic-tac-toe';

import { connect } from 'react-redux';

import './square.css';

export const Square = ({ index: i, value, play }) => (
    <button className="square" onClick={() => play({ i })}>
        {value}
    </button>
);

const mapStateToProps = (state, ownProps) => ({
    value: square(state)(ownProps.index)
});

export default connect(mapStateToProps, { play })(Square);