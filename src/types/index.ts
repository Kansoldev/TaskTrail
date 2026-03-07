export type Task = {
  title: string;
  description: string;
  completed: boolean;
  $id: string;
  $sequence: number;
  $createdAt: string;
  $updatedAt: string;
  $databaseId: string;
  $collectionId: string;
};

export type TasksByDate = Record<string, Task[]>;

export type TodoItemProps = {
  task: Task;
  index: Number;
  onStatusUpdate: (id: string) => void;
  onDelete: (id: string) => void;
};
