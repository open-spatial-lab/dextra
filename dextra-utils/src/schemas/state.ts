import { DataSchema } from "./interfaces";
import { createStoreon, StoreonModule } from "storeon";

export type DataState = {
  [key: string]: Dataset;
};

export type Dataset = {
  columns: string[];
  state?: "loaded";
};

// State structure
interface State {
  data: DataState;
  db: undefined | 'loading' | 'loaded';
}

interface Events {
  inc: undefined;
  setData: DataState;
  setDb: State['db'];
}

const counterModule: StoreonModule<State, Events> = (store) => {
  store.on("@init", (state) => ({ data: {} }));
  store.on("setData", (state, event) => ({
    data: { ...state.data, ...event },
  }));
  store.on("setDb", (state, event) => ({ db: event }));
};

export const store = createStoreon<State, Events>([counterModule]);
