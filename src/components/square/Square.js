/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

//import { withProps } from 'libs/model';

import { createSelector } from 'reselect';

import {
    square,
    play,
} from 'models/tic-tac-toe';

import { connect } from 'react-redux';

import './square.css';

export const Square = ({ index, value, play }) => {
    return (
        <button className="square" onClick={() => play({i: index})}>
            {value}
        </button>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: square(state)(ownProps.index)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        play: i => dispatch(play({ i })),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);

// export default withProps(
//     {
//         value: (state, props) => square(state)(props.index),
//     },
//     {
//         play,
//     },
// )(Square);

// const mapStateToProps = createSelector(square, (value) => ({
//     value,
// }));