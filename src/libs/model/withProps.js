/* eslint-disable react/display-name */
import React, { useContext} from 'react';
import { ModelContext } from 'libs/model';

export const withProps = (selectors, actions) => Component => props => {

    const { 
        state,
        dispatch,
    } = useContext(ModelContext);

    const stateProps = Object.entries(selectors).reduce(
        (stateProps, [propName, propSelector]) => ({
            ...stateProps,
            [propName]: propSelector(state, props),
        }),
        {},  
    );

    const actionProps = Object.entries(actions).reduce(
        (actionProps, [propName, actionCreator]) => ({
            ...actionProps,
            [propName]: actionCreator(dispatch, props),
        }),
        {},
    );

    return (
        <Component {...stateProps} {...actionProps} {...props} />
    ); 
};