"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Stitch,
  Size,
  Position,
  Schema,
  splitString,
  KnitSymbol,
} from "@/shared";
import { Cell } from "./cell";

const STITCH_W = 40;
const STITCH_H = 40;

const getGrid = (rows: number, colums: number, scale: number = 1) => {
  const result: Stitch[] = [];
  const gridSize = rows * colums;
  for (let index = 0; index < gridSize; index++) {
    const rowIndex = Math.floor(index / colums);
    const colIndex = index % colums;
    const id = uuidv4();
    const size: Size = { width: STITCH_W * scale, height: STITCH_H * scale };
    const position: Position = {
      x: colIndex * size.width,
      y: rowIndex * size.height,
    };
    const stitch: Stitch = {
      id: id,
      index,
      fill: "#fff",
      position,
      size,
    };
    result.push(stitch);
  }
  return result;
};

const getStitchs = (
  elements: string[],
  symbols: KnitSymbol[],
  scale: number = 1
): Stitch[] => {
  const result: Stitch[] = [];
  const size: Size = { width: STITCH_W * scale, height: STITCH_H * scale };
  const dictionary = new Map(symbols.map((symbol) => [symbol.id, symbol]));
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const knit = dictionary.get(element)?.symbol ?? "#fff";
    const stitch: Stitch = {
      id: uuidv4(),
      index: i,
      fill: knit,
      position: { x: 0, y: 0 },
      size: size,
    };
    result.push(stitch);
  }
  return result;
};

type Props = {
  schema: Schema;
  symbols: KnitSymbol[];
  currentSymbol: string;
};

export const SchemaCanvas = ({
  schema,
  symbols,
  currentSymbol = "xox",
}: Props) => {
  const [stitches, setStitches] = useState<Stitch[]>([]);
  const [scale, setScale] = useState(1);

  const onClickStitch = (index: number) => {
    const dictionary = new Map(symbols.map((symbol) => [symbol.id, symbol]));
    const knit = dictionary.get(currentSymbol)?.symbol ?? "#fff";
    console.log({ knit });
    setStitches((values) =>
      values.map((value) => {
        if (value.index === index) return { ...value, fill: knit };
        return value;
      })
    );
  };

  useEffect(() => {
    const slitedCanvas = splitString(schema.canvas, 3);
    setStitches(getStitchs(slitedCanvas, symbols));
  }, [schema, symbols]);

  return (
    <div className="overflow-hidden">
      <div
        className={`grid gap-1`}
        style={{
          gridTemplateRows: `repeat(${schema.rowsCount}, ${
            STITCH_W * scale
          }px)`,
          gridTemplateColumns: `repeat(${schema.columnsCount}, ${
            STITCH_H * scale
          }px)`,
        }}
      >
        {stitches.map((stitch) => (
          <Cell key={stitch.id} stitch={stitch} onClick={onClickStitch} />
        ))}
      </div>
    </div>
  );
};
