import React, { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}
