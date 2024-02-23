"use client";
import React from "react";
import type { InputProps } from ".";

export default function Input({ label, ...props }: InputProps) {
  const withLabel = !!label;
  return (
    <>
      {withLabel && <label htmlFor={props.name}>{label}</label>}
      <input {...props} />
    </>
  );
}
