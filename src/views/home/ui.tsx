import { SchemaCreationValues } from "@/shared";
import s from "./home.module.css";
import SchemaCreationForm from "@/features";
import { createSchema } from "@/entities";
import { revalidatePath } from "next/cache";

export default async function Home() {
  return (
    <section className={s.home}>
      <SchemaCreationForm onSubmit={createSchema} />
    </section>
  );
}
