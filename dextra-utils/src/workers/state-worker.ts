import { State } from "../schemas/state";
import { expose } from "comlink";

const StateWorker = new State();

// @ts-ignore
onconnect = (e: MessageEvent) => expose(StateWorker, e.ports[0]);
