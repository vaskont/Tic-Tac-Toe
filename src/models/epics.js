import { playEpic, jumpToEpic } from "./tic-tac-toe";
import { loginEpic } from "./login";
import { combineEpics } from "redux-observable";

const epics = combineEpics(playEpic, jumpToEpic, loginEpic);
export { epics };