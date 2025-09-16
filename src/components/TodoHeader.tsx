const TodoHeader = ({ date, noOfTasks }) => {
  return (
    <header className="flex justify-between items-center py-4 mb-2">
      <h2 className="text-lg min-[450px]:text-3xl font-bold">{date}</h2>
      <span
        className="bg-[#283655] w-[55px] h-[55px] text-white flex justify-center items-center rounded-full font-semibold"
        style={{ borderRadius: "100%", fontWeight: "600" }}
      >
        0 / {noOfTasks}
      </span>
    </header>
  );
};

export default TodoHeader;
