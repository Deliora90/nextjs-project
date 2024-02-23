import { Schema } from "@/views";

type PathParams = {
  id: number;
};

type Props = {
  params: PathParams;
};

export default function SchemaPage({ params }: Props) {
  return <Schema id={params.id} />;
}
