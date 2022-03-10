const winner = ({ winner }) => winner;
const xIsNext = state => state.xIsNext;
const squares = ({ history }) => history[history.length - 1].squares;
const history = ({ history }) => history;
const square = state => i =>  squares(state)[i];
const name = state => state.name;

export {
    winner,
    xIsNext,
    squares,
    history,
    square,
    name,
};