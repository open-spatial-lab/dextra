import { proxy, subscribe } from "valtio";
import { TooltipStore } from "./types";

export const initialState: TooltipStore = {
  tooltips: {}
}


export const tooltipStore = proxy<TooltipStore>(initialState);
