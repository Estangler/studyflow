import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
