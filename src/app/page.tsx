"use client";

import { Query } from "appwrite";
import Todos from "@/components/Todos";
import { databases } from "../lib/appwrite";

export default async function Page() {
  const todosData = await databases.listDocuments(
    "688e4b54001f413aa5e0",
    "68ac581e00184d238450",
    [Query.orderDesc("$createdAt")]
  );

  const taskslist = todosData.documents.reduce((dates, task) => {
    const createdAt = new Date(task.$createdAt).toDateString();

    if (!dates[createdAt]) {
      dates[createdAt] = [];
    }

    dates[createdAt].push(task);
    return dates;
  }, {});

  return (
    <main className="container px-4 mx-auto">
      <Todos taskslist={taskslist} />
    </main>
  );
}
