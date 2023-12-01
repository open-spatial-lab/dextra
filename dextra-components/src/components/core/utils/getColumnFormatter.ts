const presets = {
  "date": (v: any) => new Date(v),
  "round": (v: any) => Math.round(v),
  "round2": (v: any) => Math.round(v * 100) / 100,
  "round3": (v: any) => Math.round(v * 1000) / 1000,
}

export const getForamtter = (format: any) => {
  // @ts-ignore
  return (presets[format] || ((v: any) => v)) as (v: number) => any
}