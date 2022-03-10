import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export const withProps = (selectors, actionCreators, ...rest) => 
    connect(createStructuredSelector(selectors), actionCreators, ...rest);