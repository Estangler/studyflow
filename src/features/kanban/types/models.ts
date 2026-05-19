export type TaskStatus = "ONBOARD" | "TODO" | "PROGRESS" | "COMPLETED";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";
export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export interface IKanbanBoard {
  column: TaskStatus;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  onRemoveTask: (id: string) => void;
  taskList: Task[];
}

export type NewTaskFormData = {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
};

export interface ITasksContext {
  taskList: Task[];
  moveTask: (taskId: string, nextStatus: TaskStatus) => void;
  onAddTask: (newTaskData: Omit<Task, "id">) => void;
  onRemoveTask: (id: string) => void;
  isAddTaskModalOpen: boolean;
  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;
  closeTaskDetails: () => void;
  openTaskDetails: () => void;
  isTaskDetailsModalOpen: boolean;
}
