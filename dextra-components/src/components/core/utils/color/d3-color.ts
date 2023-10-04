import {
  interpolateBlues,
  interpolateBrBG,
  interpolateBuGn,
  interpolateBuPu,
  interpolateGnBu,
  interpolateGreens,
  interpolateGreys,
  interpolateOranges,
  interpolateOrRd,
  interpolatePiYG,
  interpolatePRGn,
  interpolatePuBu,
  interpolatePuBuGn,
  interpolatePuOr,
  interpolatePuRd,
  interpolatePurples,
  interpolateRdBu,
  interpolateRdGy,
  interpolateRdPu,
  interpolateRdYlBu,
  interpolateRdYlGn,
  interpolateReds,
  interpolateSpectral,
  interpolateYlGn,
  interpolateYlGnBu,
  interpolateYlOrBr,
  interpolateYlOrRd,
  interpolateTurbo,
  interpolateViridis,
  interpolateMagma,
  interpolateInferno,
  interpolatePlasma,
  interpolateCividis,
  interpolateCubehelixDefault,
  interpolateWarm,
  interpolateCool,
  interpolateRainbow,
  interpolateSinebow,
} from 'd3';


export const d3Scales = {
  // diverging
  "d3-brbg": interpolateBrBG,
  "d3-prgn": interpolatePRGn,
  "d3-piyg": interpolatePiYG,
  "d3-puor": interpolatePuOr,
  "d3-rdbu": interpolateRdBu,
  "d3-rdgy": interpolateRdGy,
  "d3-rdylbu": interpolateRdYlBu,
  "d3-rdylgn": interpolateRdYlGn,
  "d3-spectral": interpolateSpectral,

  // reversed diverging (for temperature data)
  "d3-burd": (t: number) => interpolateRdBu(1 - t),
  "d3-buylrd": (t: number) => interpolateRdYlBu(1 - t),

  // sequential (single-hue)
  "d3-blues": interpolateBlues,
  "d3-greens": interpolateGreens,
  "d3-greys": interpolateGreys,
  "d3-purples": interpolatePurples,
  "d3-reds": interpolateReds,
  "d3-oranges": interpolateOranges,

  // sequential (multi-hue)
  "d3-turbo": interpolateTurbo,
  "d3-viridis": interpolateViridis,
  "d3-magma": interpolateMagma,
  "d3-inferno": interpolateInferno,
  "d3-plasma": interpolatePlasma,
  "d3-cividis": interpolateCividis,
  "d3-cubehelix": interpolateCubehelixDefault,
  "d3-warm": interpolateWarm,
  "d3-cool": interpolateCool,
  "d3-bugn": interpolateBuGn,
  "d3-bupu": interpolateBuPu,
  "d3-gnbu": interpolateGnBu,
  "d3-orrd": interpolateOrRd,
  "d3-pubugn": interpolatePuBuGn,
  "d3-pubu": interpolatePuBu,
  "d3-purd": interpolatePuRd,
  "d3-rdpu": interpolateRdPu,
  "d3-ylgnbu": interpolateYlGnBu,
  "d3-ylgn": interpolateYlGn,
  "d3-ylorbr": interpolateYlOrBr,
  "d3-ylorrd": interpolateYlOrRd,

  // cyclical
  "d3-rainbow": interpolateRainbow,
  "d3-sinebow": interpolateSinebow
};