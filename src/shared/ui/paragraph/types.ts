import { PropsWithChildren } from "react";

export type ParagraphLevel = 1 | 2 | 3 | 4 | 5;

export type ParagraphProps = PropsWithChildren & {
  level?: ParagraphLevel;
};
