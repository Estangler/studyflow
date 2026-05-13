export type TaskStatus = "TO_STUDY" | "STUDYING" | "COMPLETED";
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}

export interface IKanbanBoard {
  column: TaskStatus;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  taskList: Task[];
}
