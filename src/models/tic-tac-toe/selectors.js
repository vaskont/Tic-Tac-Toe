const winner = ({game: { winner } }) => winner;
const xIsNext = ({game: { xIsNext } }) => xIsNext;
const squares = ({game: { history } }) => history[history.length - 1].squares;
const history = ({game: { history } }) => history;
const square = state => i =>  squares(state)[i];
const name = state => state.login.name;

export {
    winner,
    xIsNext,
    squares,
    history,
    square,
    name,
};