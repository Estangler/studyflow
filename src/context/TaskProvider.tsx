import { type ReactNode, useEffect, useState } from "react";
import { TaskContext } from "./TaskContext";
import type { Task, TaskStatus } from "../features/kanban/types/models";
import { saveStorage } from "../storage/saveStorage";
import { STORAGE_KEYS } from "../storage/storageKeys";
import { getStorage } from "../storage/getStorage";

export default function TaskProvider({ children }: { children: ReactNode }) {
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState<boolean>(false);
  const [isTaskDetailsModalOpen, setIsTaskDetailsModalOpen] =
    useState<boolean>(false);
  const [taskList, setTaskList] = useState<Task[]>(() => {
    return getStorage(STORAGE_KEYS.TASKS_LIST, []);
  });

  function moveTask(taskId: string, nextStatus: TaskStatus) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  }

  function onAddTask(title: string, description: string) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status: "ONBOARD",
      priority: "LOW",
    };

    setTaskList((prevList) => [...prevList, newTask]);
    closeAddTaskModal();
  }

  useEffect(() => {
    saveStorage(STORAGE_KEYS.TASKS_LIST, taskList);
  }, [taskList]);

  function onRemoveTask(id: string) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  function closeAddTaskModal() {
    setIsAddTaskModalOpen(false);
  }

  function openAddTaskModal() {
    setIsAddTaskModalOpen(true);
  }

  function openTaskDetails() {
    setIsTaskDetailsModalOpen(true);
  }

  function closeTaskDetails() {
    setIsTaskDetailsModalOpen(false);
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
        closeTaskDetails,
        openTaskDetails,
        isTaskDetailsModalOpen,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
