import { playEpic, jumpToEpic } from "./tic-tac-toe";
import { changeNameEpic } from "./login";
import { combineEpics } from "redux-observable";

const epics = combineEpics(playEpic, jumpToEpic, changeNameEpic);
export { epics };