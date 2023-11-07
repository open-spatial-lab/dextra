import { DataResult } from "../state/types";
import tinycolor, { Instance } from "tinycolor2";
import { FormatterPresets, getFormatter } from "./numberFormatter";
import { colorSchemes } from "./color";
// @ts-ignore
import { generateBuckets } from "geobuckets";

type Color = string | { r: number; g: number; b: number; a: number }; // number[]
type ColorArray = Array<Color>;
type ColorFormats =
  | "RGB"
  | "RGB-Object"
  | "RGB-Array"
  | "HEX"
  | "HSV-Object"
  | "HSV"
  | "HSL"
  | "HSL-Object";
type ColorDictionary = { [key: string]: Color };

const METHOD_DEFAULT_BREAKS = {
  EQI: 5,
  STD: 4,
  APG: 5,
  QNT: 5,
  JNK: 5,
};

export class BinBuilder {
  type: "continuous" | "categorical" | "ordinal" = "continuous";
  colorScheme?: keyof typeof colorSchemes = "RdPu";
  colorStops?: Instance[] | { [key: string]: Instance };
  labels?: string[] | Record<string, string>;
  labelFormat: FormatterPresets = "nice";
  // continuous
  method?: "EQI" | "STD" | "APG" | "QNT" | "JNK";
  bins?: number;
  manualBreaks?: number[];
  // categorical
  mapping?: Record<string, string>;

  // data
  data: DataResult = [];
  accessor: (d: DataResult[number]) => number | string = (_d: any) => 0;
  current?: {
    breaks: (number|string)[];
    labels: string[];
    colorStops?: Instance[];
  };

  // inner utils
  formatter: ReturnType<typeof getFormatter> = getFormatter(this.labelFormat);
  constructor({
    type,
    colorScheme,
    colorStops,
    method,
    bins,
    manualBreaks,
    mapping,
    labels,
    labelFormat,
  }: Partial<BinBuilder>) {
    this.type = type || "continuous";

    if (colorStops) {
      this.colorStops = this.asTinyColor(colorStops as any);
    } else {
      this.colorScheme = colorScheme || "RdPu";
    }

    if (labels) {
      this.labels = labels;
    } else if (labelFormat) {
      this.labelFormat = labelFormat;
      this.formatter = getFormatter(this.labelFormat);
    }

    switch (this.type) {
      case "continuous":
        this.method = method || "QNT";
        this.bins = bins || METHOD_DEFAULT_BREAKS[this.method];
        this.manualBreaks = manualBreaks;
        break;
      case "categorical":
        this.mapping = mapping;
        break;
    }
  }
  asTinyColor(colors: string[] | ColorDictionary) {
    if (Array.isArray(colors)) {
      return colors.map((c) => tinycolor(c));
    } else if (typeof colors === "object") {
      return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, tinycolor(value)])
      );
    } else {
      return colors as never;
    }
  }

  applyColorScheme(colorScheme: keyof typeof colorSchemes, bins: number) {
    const colorSeries = colorSchemes[colorScheme];
    const stops = colorSeries?.[bins as keyof typeof colorSeries];
    const mostColors = Math.max(...(Object.keys(colorSeries||[]).map(f => +f))) as number
    if (stops) {
      this.colorStops = this.asTinyColor(stops as string[]);
      this.colorScheme = colorScheme;
      this.bins = bins;
    } else if (typeof colorSeries === "function") {
      let colorStops = [];
      const step = 1 / bins;
      for (let i = 0; i <= 1; i += step) {
        colorStops.push(colorSeries(i));
      }
      this.colorStops = this.asTinyColor(colorStops);
      this.colorScheme = colorScheme;
      this.bins = bins;
      // @ts-ignore
    } else if (colorSeries && bins > mostColors) {
      const stops = colorSeries[mostColors as keyof typeof colorSeries];
      this.colorStops = this.asTinyColor(stops);
      this.colorScheme = colorScheme;
      this.bins = bins;
    } else {
      console.warn(`Color scheme ${colorScheme} not found`);
      this.applyDefaultColorSchema();
    }
    // @ts-ignore
    this.colorStops = this.repeatColorStopsAsNeeded(bins, this.colorStops);
    return this.colorStops;
  }

  async generateBins() {
    if (this.manualBreaks) {
      return this.manualBreaks;
    } else if (this.type === "categorical") {
      return this.generateCategoricalBins();
    } else if (this.type === "continuous") {
      return this.generateContinuousBins();
    } else if (this.type === "ordinal") {
      // return this.generateOrdinalBins(data);
    }
  }

  async generateCategoricalBins() {
    const { data, accessor, mapping } = this;
    if (mapping) {
      return Object.values(mapping);
    }
    return data.map(accessor).filter(this.filterUnique);
  }

  async generateContinuousBins() {
    const { data, accessor, bins, method } = this;
    const modifiedAcessor = method === 'QNT' ? (d: DataResult[number]) => {
      const val = accessor(d);
      if (val === 0) {
        return undefined
      }
      return val
    } : accessor
    const values = data.map(modifiedAcessor).filter(d => d !== undefined && d !== null) as number[];
    const cleanBins = Math.min(bins!, values.length-1)
    try {
      const breaks = await generateBuckets(method, values, cleanBins);
      return breaks;
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  formatColor(color: Instance, format: ColorFormats = "RGB") {
    switch (format) {
      case "RGB":
        return color.toRgbString();
      case "RGB-Array":
        let v = Object.values(color.toRgb());
        if (v.length === 4) {
          v[3] = v[3] * 255;
        }
        return v;

      case "RGB-Object":
        return color.toRgb();
      case "HEX":
        return color.toHexString();
      case "HSV":
        return color.toHsvString();
      case "HSV-Object":
        return color.toHsv();
      case "HSL":
        return color.toHsl();
      case "HSL-Object":
        return color.toHsl();
      default:
        return color.toRgbString();
    }
  }
  getLegend(format: ColorFormats = "RGB") {
    const { labels, colorStops, breaks } = this.current || {};
    if (!labels || !colorStops || !breaks) {
      return [];
    }
    switch (this.type) {
      case "continuous":
        return colorStops.map((c, i) => ({
          symbol: { color: this.formatColor(c, format) },
          text: `${labels[i]}-${labels[i + 1]}`,
        }));
      case "categorical":
        return breaks.map((b, i) => ({
          symbol: { color: this.formatColor(colorStops[i], format) },
          text: labels[i],
        }))
      default:
        return [];
    }
  }
  generateContinuousColorFunc(format: ColorFormats = "RGB") {
    const accessor = this.accessor;
    const stops = this.colorStops
      ? (this.current?.colorStops as Instance[])
      : [];
    const colors = stops.map((c) => this.formatColor(c, format));
    const bins = (this.current?.breaks || []) as number[];
    return (d: Record<string, number>) => {
      const val = accessor(d) as number;
      for (let i = 1; i < bins.length; i++) {
        if (val <= bins[i]) {
          return colors[i - 1];
        }
      }
      return colors[0];
    };
  }

  generateCategoricalColorFunc(
    format: ColorFormats = "RGB",
  ) {
    const { accessor, mapping } = this;
    const { breaks, colorStops} = this.current || {};
    const stops = colorStops
      ? (colorStops as Instance[])
      : [];
    const colors = stops.map((c) => this.formatColor(c, format));
    if (!breaks?.length || !colorStops?.length) {
      return () => null
    }
    const innerAccessor = mapping ? (d: Record<string,any>) => mapping[accessor(d)] : accessor
    
    return (d: Record<string, string | number>) => {
      const entry = innerAccessor(d);
      const idx = breaks.indexOf(entry);
      return idx === -1 ? null : colors[idx];
    };
  }

  async ingestDataAndAccesor(
    data: DataResult,
    accessor: (d: DataResult[number]) => number | string
  ) {
    const { colorScheme, bins, type } = this;
    const isContinuous = type === "continuous";
    const schemaValid = colorScheme || bins;
    const inputValid = data?.length;

    if (schemaValid && inputValid) {
      this.data = data;
      this.accessor = accessor;
      const breaks = await this.generateBins();
      const labels = isContinuous ?  breaks.map(this.formatter.format) : breaks;
      const count = isContinuous ? bins : breaks.length;
      this.current = {
        breaks,
        labels,
        colorStops: this.applyColorScheme(colorScheme!, count),
      };
    }
  }

  // utils
  filterUnique(value: unknown, idx: number, arr: unknown[]) {
    return arr.indexOf(value) === idx;
  }

  sortOrdinal(a: any, b: any) {
    return a - b;
  }

  applyDefaultColorSchema() {
    this.applyColorScheme("RdPu", 5);
  }

  repeatColorStopsAsNeeded(needed: number, colorStops?: any[]) {
    if (!colorStops) {
      return colorStops;
    }
    const step = colorStops.length;
    const repeats = Math.ceil(needed / step);
    const repeated = [];
    for (let i = 0; i < repeats; i++) {
      repeated.push(...colorStops);
    }
    return repeated.slice(0, needed);
  }
}
