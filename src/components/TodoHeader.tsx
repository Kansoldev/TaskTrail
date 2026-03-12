const TodoHeader = ({ date, noOfTasks }) => {
  return (
    <header className="flex justify-between items-center py-4 mb-2">
      <h2 className="text-[#283655] text-2xl min-[450px]:text-3xl font-bold">
        {date}
      </h2>

      <span
        className="w-[55px] h-[55px] text-[#283655] border-2 border-[#283655] flex justify-center items-center rounded-full font-bold"
        style={{ borderRadius: "100%", fontWeight: "600" }}
      >
        0/{noOfTasks}
      </span>
    </header>
  );
};

export default TodoHeader;
