"use client";

import { useState } from "react";
import Image from "next/image";

import { Models } from "appwrite";
import { TasksByDate } from "../types";

import { databases } from "@/lib/appwrite";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import AddTodoModal from "./AddTodoModal";

const Todos = ({ data }) => {
  const [todos, setTodos] = useState<Models.Document[]>(data);
  const [showModal, setShowModal] = useState(false);

  /*
    This taskslist variable is just for presentation purposes, It is not the data
    to be used by the application. It's the original data that comes from AppWrite 
    I should be using, not the one I transformed.
  */
  const tasksList: TasksByDate = todos.reduce((dates, task) => {
    const createdAt = new Date(task.$createdAt).toDateString();

    if (!dates[createdAt]) {
      dates[createdAt] = [];
    }

    dates[createdAt].push(task);
    return dates;
  }, {});

  function handleAddTask(newTask) {
    setTodos([newTask, ...todos]);
  }

  async function getTodoID(todoID: string) {
    return todos.filter((todo) => todo.$id === todoID);
  }

  async function handleStatusUpdate(todoID: string) {
    try {
      const updatedTodos = todos.map((todo) => {
        if (todo.$id === todoID) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

      setTodos(updatedTodos);

      const todoItem = await getTodoID(todoID);

      await databases.updateDocument(
        "688e4b54001f413aa5e0",
        "68ac581e00184d238450",
        todoID,
        {
          completed: todoItem[0].completed,
        },
      );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      {Object.entries(tasksList).map(([date, tasks], index) => (
        <section
          key={index}
          className={`xl:w-2/3 ${index !== 0 ? "mt-10" : ""}`}
        >
          <TodoHeader date={date} noOfTasks={tasks.length} />
          <div className="todos">
            {tasks.map((task, index) => (
              <TodoItem
                key={index}
                task={task}
                index={index}
                onStatusUpdate={handleStatusUpdate}
              />
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
        onAddTask={handleAddTask}
      />
    </>
  );
};

export default Todos;
