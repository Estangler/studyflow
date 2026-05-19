import type { NewTaskFormData, TaskStatus } from "../types/models";

export const KANBAN_COLUMNS: Record<TaskStatus, string> = {
  ONBOARD: "Onboard",
  TODO: "A fazer",
  PROGRESS: "Progresso",
  COMPLETED: "Done",
};

export const COLUMNS: TaskStatus[] = [
  "ONBOARD",
  "TODO",
  "PROGRESS",
  "COMPLETED",
];

export const INITIAL_NEW_TASK_FORM: NewTaskFormData = {
  title: "",
  description: "",
  status: "ONBOARD",
  priority: "LOW",
};
