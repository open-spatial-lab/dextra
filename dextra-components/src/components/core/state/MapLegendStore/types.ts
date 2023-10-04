import { LegendSpec } from "../../../GlMap/src/types"

export type LegendStoreSpec = { 
  legends: {
    [key: string]: LegendSpec
  }
}