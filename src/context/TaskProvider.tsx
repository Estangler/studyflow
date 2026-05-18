import { type ReactNode, useState } from "react";
import { TaskContext } from "./TaskContext";
import { INITIAL_TASKS } from "../features/kanban/constants/mockdata";
import type { Task, TaskStatus } from "../features/kanban/types/models";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASKS);

  function moveTask(taskId: string, nextStatus: TaskStatus) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  }

  function onAddTask(title: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: "",
      status: "ONBOARD",
      priority: "LOW",
    };

    setTaskList((prevList) => [...prevList, newTask]);
    closeAddTaskModal();
  }

  function onRemoveTask(id: string) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  function closeAddTaskModal() {
    setIsAddTaskModalOpen(false);
  }

  function openAddTaskModal() {
    setIsAddTaskModalOpen(true);
  }
  return (
    <TaskContext.Provider
      value={{
        taskList,
        moveTask,
        onAddTask,
        onRemoveTask,
        isAddTaskModalOpen,
        openAddTaskModal,
        closeAddTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
