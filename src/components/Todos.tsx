"use client";

import { useState } from "react";
import Image from "next/image";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import AddTodoModal from "@/components/AddTodoModal";

type Task = {
  title: string;
  description: string;
  $id: string;
  $sequence: number;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $collectionId: string;
};

/*
  This variable builds up the new set of tasks to be added
  in the state so nothing gets lost. If I put this variable
  inside handleTaskUpdate(), each time the function re-runs,
  it will empty the array and erase the previous data.
*/
let createdAtTasks = [];

const Todos = ({ taskslist }: { taskslist: Record<string, Task[]> }) => {
  const [tasks, setTasks] = useState(taskslist);
  const [showModal, setShowModal] = useState(false);

  function handleTaskUpdate(newTask) {
    const createdAt = new Date(newTask.$createdAt).toDateString();

    /*
      Check if the date already exists in `tasks` to get
      the previously added todos before pushing the new one
    */
    if (tasks.hasOwnProperty(createdAt)) {
      createdAtTasks = tasks[createdAt];
    }

    // Push the new task to the first position in the array
    createdAtTasks.unshift(newTask);

    setTasks({
      ...tasks,
      [createdAt]: createdAtTasks,
    });
  }

  return (
    <>
      {Object.entries(tasks).map(([date, tasks], index) => (
        <section
          key={index}
          className={`xl:w-2/3 ${index !== 0 ? "mt-10" : ""}`}
        >
          <TodoHeader date={date} noOfTasks={tasks.length} />
          <div className="todos">
            {tasks.map((task, index) => (
              <TodoItem key={index} task={task} index={index} />
            ))}
          </div>
        </section>
      ))}

      <div className="xl:w-2/3">
        <button
          className="bg-purple-600 hover:bg-purple-500 text-white transition-colors fixed bottom-5 right-4 h-[60px] w-[60px] flex justify-center items-center rounded-full"
          onClick={() => setShowModal(!showModal)}
        >
          <Image src="/plus.svg" width={28} height={28} alt="" />
        </button>
      </div>

      <AddTodoModal
        showModal={showModal}
        onShow={() => setShowModal(!showModal)}
        onTaskUpdate={handleTaskUpdate}
      />
    </>
  );
};

export default Todos;
