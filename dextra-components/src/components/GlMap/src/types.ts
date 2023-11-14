export type SymbolSpec = {
  color: string;
  radius?: number;
  strokeWidth?: number;
};

export type LegendElementSpec = {
  symbol: SymbolSpec;
  text: string;
};

export type LegendSpec = {
  title: string;
  elements: LegendElementSpec[]
  visible?: boolean;
  staticFill?: Array<number>;
  staticStroke?: Array<number>;
  type?: "categorical" | "continuous" | "ordinal" | "static";
  hasText?: boolean
};