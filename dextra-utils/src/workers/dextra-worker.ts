import { DataWorker } from "./worker-class";
import { expose } from "comlink";

const AnalysisWorker = new DataWorker();

// @ts-ignore
onconnect = (e: MessageEvent) => expose(AnalysisWorker, e.ports[0]);
