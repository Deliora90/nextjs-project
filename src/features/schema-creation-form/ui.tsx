import React from "react";
import { ButtonAsync, InputAsync, SchemaCreationValues } from "@/shared";

const initialValues: SchemaCreationValues = {
  name: "",
  rowsCount: 1,
  columnsCount: 1,
};

type Props = {
  onSubmit: (values: SchemaCreationValues) => Promise<void>;
};

export default async function SchemaCreationForm({ onSubmit }: Props) {
  const createSchema = async (formData: FormData) => {
    "use server";

    const schemaFormData = {
      name: String(formData.get("name")),
      rowsCount: Number(formData.get("rowsCount")),
      columnsCount: Number(formData.get("columnsCount")),
    };
    await onSubmit?.(schemaFormData);
  };

  return (
    <form action={createSchema} className="flex flex-col gap-3">
      <InputAsync
        id="name"
        name="name"
        label="Name"
        type="text"
        defaultValue={initialValues.name}
      />
      <InputAsync
        id="rowsCount"
        name="rowsCount"
        label="Rows"
        type="number"
        min={1}
        defaultValue={initialValues.rowsCount}
      />
      <InputAsync
        id="columnsCount"
        name="columnsCount"
        label="Columns"
        type="number"
        min={1}
        defaultValue={initialValues.columnsCount}
      />
      <ButtonAsync type="submit" variant="primary">
        Create
      </ButtonAsync>
    </form>
  );
}
