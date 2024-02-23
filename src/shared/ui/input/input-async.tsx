"use server";
import React from "react";
import type { InputProps } from ".";

export default async function InputAsync({ label, ...props }: InputProps) {
  const withLabel = !!label;
  return (
    <>
      {withLabel && <label htmlFor={props.name}>{label}</label>}
      <input {...props} />
    </>
  );
}
