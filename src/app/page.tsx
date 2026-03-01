import { databases, Query } from "@/lib/appwrite";
import Todos from "@/components/Todos";

export const dynamic = "force-dynamic";

export default async function Page() {
  const todosData = await databases.listDocuments(
    "688e4b54001f413aa5e0",
    "68ac581e00184d238450",
    [Query.orderDesc("$createdAt")]
  );

  return (
    <main className="container px-4 mx-auto">
      <Todos data={todosData.documents} />
    </main>
  );
}
