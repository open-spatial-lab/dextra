
const presets = {
  nice: {
    notation: 'compact',
  },
  scientific: {
    notation: 'scientific',
    maximumFractionDigits: 2,
  },
  full: {
    notation: 'standard',
    maximumFractionDigits: 2,
  },
  percent: {
    style: 'percent',
    maximumFractionDigits: 2,
  }
} as const


type CurrencyPreset = `currency:${string}`
export type FormatterPresets = keyof typeof presets | CurrencyPreset

export const getFormatterPreset = (preset: FormatterPresets) => {
  if (preset.startsWith('currency')) {
    const currency = preset.split(':')[1]
    return {
      style: 'currency',
      currency,
    }
  } 
  if (presets.hasOwnProperty(preset)) {
    return presets[preset as keyof typeof presets]
  }
  return presets.full
}


export const getFormatter = (type: FormatterPresets, overrides: Intl.NumberFormatOptions = {}) => {
  return new Intl.NumberFormat("en-US", {
    ...getFormatterPreset(type),
    ...overrides,
  })
}