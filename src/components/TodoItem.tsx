const TodoItem = ({ task, index }) => {
  return (
    <div
      className={`input-group flex items-center justify-between ${
        index !== 0 ? "mt-5" : ""
      }`}
    >
      <div className="todo">
        <input type="checkbox" id={task.title} />
        <label htmlFor={task.title} className="ml-8 text-xl">
          {task.title}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
