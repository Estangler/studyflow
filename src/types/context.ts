import type { Task, TaskStatus } from "../features/kanban/types/models";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface IContext {
  users: IUser[];
  register: (formData: Omit<IUser, "id">) => IValidationResult;
  login: (credentials: UserCredentials) => IValidationResult;
  currentUser: Omit<IUser, "password"> | null;
  isAuthenticated: boolean;
  logout: () => void;
}

export interface ITasksContext {
  taskList: Task[];
  moveTask: (taskId: string, nextStatus: TaskStatus) => void;
  onAddTask: (newTaskData: Omit<Task, "id">) => void;
  onRemoveTask: (id: string) => void;
  isAddTaskModalOpen: boolean;
  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;
  onSelectTaskId: (id: string | null) => void;
  selectedTaskId: string | null;
}
