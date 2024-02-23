export type Size = {
  width: number;
  height: number;
};

export type Position = { x: number; y: number };

export type Stitch = {
  id: string;
  index: number;
  fill: string;
  position: Position;
  size: Size;
};