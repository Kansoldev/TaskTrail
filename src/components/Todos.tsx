import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";

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

const Todos = ({ taskslist }: { taskslist: Record<string, Task[]> }) => {
  return (
    <>
      {Object.entries(taskslist).map(([date, tasks], index) => (
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
    </>
  );
};

export default Todos;
