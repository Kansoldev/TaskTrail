import { TodoItemProps } from "../types";

const TodoItem: React.FC<TodoItemProps> = ({ task, index, onStatusUpdate }) => {
  return (
    <div
      className={`input-group flex items-center justify-between ${
        index !== 0 ? "mt-5" : ""
      }`}
    >
      <div className="todo">
        <input
          type="checkbox"
          id={task.title}
          onChange={() => onStatusUpdate(task.$id)}
          checked={task.completed}
        />

        <label
          htmlFor={task.title}
          className={`ml-8 text-xl ${task.completed ? "line-through" : ""}`}
        >
          {task.title}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
