import { FormatterPresets } from "../../utils/numberFormatter"

export type TooltipEntry = {
  x: number | null,
  y: number | null,
  data: string | {
    label?: string,
    value?: string | number,
  }[],
}

export type TooltipStore = { 
  tooltips: {
    [key: string]: TooltipEntry
  }
}

export type TooltipSpec = {
  column: string,
  label?: string,
  format?: FormatterPresets,
}

export type ManualTooltipSpec = (row: Record<string, unknown>) => string