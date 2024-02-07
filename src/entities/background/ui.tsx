import React from "react";
import Image from "next/image";
import type { BackgroundProps } from "./";
import s from "./background.module.css";

export const Background = ({ url }: BackgroundProps) => {
  return (
    <div className={s.background}>
      <Image src={url} alt="background" layout="fill" objectFit="cover" />
      <div className={s.background__mask} />
    </div>
  );
};
