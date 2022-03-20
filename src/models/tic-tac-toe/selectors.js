const winner = ({game: { winner } }) => winner;
const draw = ({game: { draw } }) => draw;
const xIsNext = ({game: { xIsNext } }) => xIsNext;
const squares = ({game: { history } }) => history[history.length - 1].squares;
const history = ({game: { history } }) => history;
const square = state => i =>  squares(state)[i];

export {
    winner,
    draw,
    xIsNext,
    squares,
    history,
    square,
};