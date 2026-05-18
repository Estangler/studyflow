import { useState } from "react";
import { INITIAL_TASKS } from "../features/kanban/constants/mockdata";
import type { Task, TaskStatus } from "../features/kanban/types/models";

export default function useTasks() {
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
  }

  function onRemoveTask(id: string) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  return {
    moveTask,
    onAddTask,
    onRemoveTask,
    taskList,
  };
}
