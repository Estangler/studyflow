import type { TaskStatus } from "../types/models";

export const KANBAN_COLUMNS: Record<TaskStatus, string> = {
  TO_STUDY: "Para Estudar",
  STUDYING: "Estudando",
  COMPLETED: "Concluido",
};

export const COLUMNS: TaskStatus[] = ["TO_STUDY", "STUDYING", "COMPLETED"];
