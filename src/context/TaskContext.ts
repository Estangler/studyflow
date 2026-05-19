import { createContext } from "react";
import type { ITasksContext } from "../types/context";

export const TaskContext = createContext<ITasksContext | null>(null);
