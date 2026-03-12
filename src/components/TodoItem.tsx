import { TodoItemProps } from "../types";

const TodoItem: React.FC<TodoItemProps> = ({ task, index, onStatusUpdate }) => {
  return (
    <div
      className={`input-group flex items-center justify-between ${
        index !== 0 ? "mt-5" : ""
      }`}
    >
      <div className="todo">
        <label
          htmlFor={task.title}
          className={`todo-wrapper text-xl ${task.completed ? "line-through" : ""}`}
        >
          <input
            type="checkbox"
            id={task.title}
            onChange={() => onStatusUpdate(task.$id)}
            checked={task.completed || false}
          />

          <span className="checkbox"></span>

          <span className="relative left-9 bottom-[2px]">{task.title}</span>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
