import React from "react";
import { SchemaProps } from "./types";
import { getSymbols, getSchemaById } from "@/entities";
import { SchemaCanvas } from "@/entities";

export default async function Schema({ id }: SchemaProps) {
  const schema = await getSchemaById(id);
  const symbols = await getSymbols();

  return (
    <div>{!!schema && <SchemaCanvas schema={schema} symbols={symbols} />}</div>
  );
}
