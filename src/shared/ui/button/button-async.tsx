"use server";
import React from "react";
import { clsx } from "clsx";
import { Props } from "./types";

import s from "./button.module.css";

export default async function ButtonAsync({
  children,
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        s.button,
        {
          [s.button_primary]: variant === "primary",
          [s.button_secondary]: variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
