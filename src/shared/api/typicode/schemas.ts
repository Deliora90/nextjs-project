export type Schema = {
  id: number;
  name: string;
  rowsCount: number;
  columnsCount: number;
  canvas: string;
};

export type SchemaCreationValues = {
  name: string;
  rowsCount: number;
  columnsCount: number;
};

export type KnitSymbol = {
  id: string;
  name: string;
  symbol: string;
};
