import type {
  NewTaskFormData,
  TaskPriority,
  TaskStatus,
} from "../types/models";

export const KANBAN_COLUMNS: Record<TaskStatus, string> = {
  ONBOARD: "Onboard",
  TODO: "A fazer",
  PROGRESS: "Progresso",
  COMPLETED: "Done",
};

export const TASK_PRIORITIES: Record<TaskPriority, string> = {
  LOW: "Baixa",
  MEDIUM: "Média",
  HIGH: "Alta",
  URGENT: "Urgente",
};

export const COLUMNS: TaskStatus[] = [
  "ONBOARD",
  "TODO",
  "PROGRESS",
  "COMPLETED",
];

export const PRIORITY_OPTIONS: TaskPriority[] = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "URGENT",
];
export const STATUS_OPTIONS: TaskStatus[] = COLUMNS; // reutiliza COLUMNS

export const INITIAL_NEW_TASK_FORM: NewTaskFormData = {
  title: "",
  description: "",
  status: "ONBOARD",
  priority: "LOW",
};
