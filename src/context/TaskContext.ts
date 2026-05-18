import { createContext } from "react";
import type { ITasksContext } from "../features/kanban/types/models";

export const TaskContext = createContext<ITasksContext | null>(null);
