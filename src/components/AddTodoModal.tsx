"use client";

import { useState, ChangeEvent } from "react";
import { ID } from "appwrite";
import { databases } from "../lib/appwrite";

const AddTodoModal = ({ showModal, onShow, onTaskUpdate }) => {
  const [newTodos, setNewTodos] = useState({
    title: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({ title: "" });
  const [loading, setLoading] = useState(false);

  function handleInputUpdate(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewTodos((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function validateForm() {
    const newErrors = { title: "" };
    let isValid = true;

    if (newTodos.title === "") {
      newErrors.title = "This field is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const { title, description } = newTodos;
      addTodos(title, description);
    } else {
      console.log("Form is not validated");
    }
  }

  async function addTodos(title: string, description?: string) {
    try {
      setLoading(true);

      const task = await databases.createDocument(
        "688e4b54001f413aa5e0",
        "68ac581e00184d238450",
        ID.unique(),
        {
          title: title,
          description: description,
          completed: false,
        }
      );

      onTaskUpdate({
        $id: task.$id,
        title: task.title,
        description: task.description,
        $createdAt: task.$createdAt,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);

      setNewTodos({
        title: "",
        description: "",
      });
    }
  }

  return (
    <>
      <div
        className={`flex justify-center items-center fixed left-0 right-0 top-0 bottom-0 bg-black/40 z-[999] px-4 min-[480px]:px-0 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="sweet-alert bg-white w-[480px] px-7 py-5 rounded-md">
          <button
            className="text-5xl bg-transparent float-right mb-5"
            onClick={onShow}
          >
            &times;
          </button>

          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              className="border border-[#0000002f] w-full px-4 py-2 mt-3"
              placeholder="Enter title"
              name="title"
              value={newTodos.title}
              onChange={(e) => handleInputUpdate(e)}
              onBlur={validateForm}
            />

            {formErrors.title && (
              <span className="inline-block text-left text-[#ed3548] font-semibold mt-2 text-sm">
                {formErrors.title}
              </span>
            )}

            <textarea
              className="border border-[#0000002f] w-full px-4 py-2 mt-5 resize-none h-40"
              placeholder="Enter description"
              name="description"
              value={newTodos.description}
              onChange={(e) => handleInputUpdate(e)}
            ></textarea>

            <button
              type="submit"
              className={`text-white border-0 shadow-none inline-block text-xl rounded-sm px-5 py-2 mt-7 w-full transition-colors ${
                loading
                  ? "cursor-not-allowed bg-gray-400"
                  : "bg-blue-700 hover:bg-blue-600"
              }`}
              disabled={loading === true}
            >
              {loading ? "Adding task..." : "Add To-do"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTodoModal;
