"use client";
import React from "react";
import { Stitch } from "@/shared";

type CellProps = {
  stitch: Stitch;
  onClick: (index: number) => void;
};

export const Cell = ({ stitch, onClick }: CellProps) => {
  const { size, position, fill, index } = stitch;

  const handleClick = () => {
    onClick(index);
  };

  return (
    <div
      style={{
        width: `${size.width}px`,
        height: `${size.height}px`,
        backgroundColor: fill,
      }}
      className="text-xs"
      onClick={handleClick}
    >
      {index}
    </div>
  );
};
