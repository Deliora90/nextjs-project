import { redirect } from "next/navigation";
import { apiService, joinArrayString } from "@/shared";
import type { Schema, SchemaCreationValues, KnitSymbol } from "@/shared";

const DEFAULT_EMPTY_ELEMENT = "xxx";

export type SchemaCreationService = SchemaCreationValues & {
  canvas: string;
};

export const createCanvas = (params: SchemaCreationValues) => {
  const { rowsCount, columnsCount } = params;
  const length = rowsCount * columnsCount;
  const canvas = Array.from({ length }, () => DEFAULT_EMPTY_ELEMENT);
  return joinArrayString(canvas);
};

export const createSchema = async (params: SchemaCreationValues) => {
  "use server";

  let id: number | null = null;

  try {
    const canvas = createCanvas(params);
    const body = { ...params, canvas };

    //TODO: Нужно возвращать id созданной схемы
    const response = await apiService.post<
      SchemaCreationValues & { id: number },
      SchemaCreationService
    >("schema", { body });
    id = response.id;
  } catch (e) {
    console.error(e);
  } finally {
    if (id) redirect(`/schema/${id}`);
  }
};

export const getSchemaById = async (id: number) => {
  "use server";

  try {
    return await apiService.get<Schema, void>(`schema/${id}`, {
      cache: "no-cache",
    });
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const getSymbols = async () => {
  "use server";

  try {
    return await apiService.get<KnitSymbol[], void>("symbols");
  } catch (e) {
    console.error(e);
    return [];
  }
};
