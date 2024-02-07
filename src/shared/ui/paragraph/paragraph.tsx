import React from "react";
import { clsx } from "clsx";
import type { ParagraphProps } from "./";
import s from "./paragraph.module.css";

export const Paragraph = ({ level, children }: ParagraphProps) => {
  let tag = "p";

  switch (level) {
    case 1:
      tag = "h1";
      break;
    case 2:
      tag = "h2";
      break;
    case 3:
      tag = "h3";
      break;
    case 4:
      tag = "p";
      break;
    case 5:
    default:
      tag = "p";
      break;
  }
  // TODO: попробовать переделать с role на семантические тэги
  return (
    <div className={clsx(s[`paragraph__${tag}`])} role={tag}>
      {children}
    </div>
  );
};
