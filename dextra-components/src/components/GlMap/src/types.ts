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
  visible?: boolean;
  elements: LegendElementSpec[]
};