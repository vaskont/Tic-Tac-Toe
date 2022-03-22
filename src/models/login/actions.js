import { Action } from 'libs/model';

const changeName = Action('CHANGE_NAME');
const changeNameSuccess = Action('CHANGE_NAME_SUCCESS');

export {
    changeName,
    changeNameSuccess,
};