import { proxy } from "valtio";
import { LegendStoreSpec } from "./types";

export const initialState: LegendStoreSpec = {
  legends: {}
}

export const legendStore = proxy<LegendStoreSpec>(initialState);