import { Action } from 'libs/model';

const play = Action('PLAY');
const jumpTo = Action('JUMP_TO');
const changeName = Action('CHANGE_NAME');

export { 
    play,
    jumpTo,
    changeName,
};