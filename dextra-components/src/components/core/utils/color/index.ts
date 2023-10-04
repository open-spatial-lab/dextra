import { colorBrewerSchemes } from './colorBrewer';
import {d3Scales} from "./d3-color";
export const colorSchemes = {
  ...colorBrewerSchemes,
  ...d3Scales
} as const