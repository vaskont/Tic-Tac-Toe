import { Action } from 'libs/model';

const play = Action('PLAY');
const playSuccess = Action('PLAY_SUCCESS');
const playFail = Action('PLAY_FAIL');

const jumpTo = Action('JUMP_TO');
const jumpToSuccess = Action('JUMP_TO_SUCCESS');
const jumpToFail = Action('JUMP_TO_FAIL');

export { 
    play,
    playSuccess,
    playFail,
    jumpTo,
    jumpToSuccess,
    jumpToFail,
};