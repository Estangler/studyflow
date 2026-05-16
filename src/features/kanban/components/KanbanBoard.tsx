import { COLUMNS } from "../constants/constants";
import { INITIAL_TASKS } from "../constants/mockdata";
import type { Task, TaskStatus } from "../types/models";
import AddTaskModal from "./AddTaskModal";
import KanbanColum from "./KanbanColum";
import { useState } from "react";

export default function KanbanBoard() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASKS);
  const [workModal, setWorkModal] = useState<boolean>(false);

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
    setWorkModal(false);
  }

  function onRemoveTask(id: string) {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="px-4 py-2 grid grid-cols-1 md:grid-cols-4 gap-6 h-full items-start">
      {COLUMNS.map((column) => (
        <KanbanColum
          column={column}
          key={column}
          moveTask={moveTask}
          taskList={taskList}
          onRemoveTask={onRemoveTask}
        />
      ))}
      <AddTaskModal workModal={workModal} onAddTask={onAddTask} />
    </div>
  );
}
