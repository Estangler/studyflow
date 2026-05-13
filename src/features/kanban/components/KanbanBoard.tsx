import { COLUMNS } from "../constants/constants";
import { INITIAL_TASKS } from "../constants/mockdata";
import type { Task, TaskStatus } from "../types/models";
import AddTaskModal from "./AddTaskModal";
import KanbanColum from "./KanbanColum";
import { useState } from "react";

interface INewTask {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
}

export default function KanbanBoard() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASKS);
  const [workModal, setWorkModal] = useState<boolean>(true);

  function moveTask(taskId: string, nextStatus: TaskStatus) {
    setTaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: nextStatus } : task,
      ),
    );
  }

  function onAddTask(title: string) {
    const newTask: INewTask = {
      id: crypto.randomUUID(),
      title: title,
      description: "",
      status: "TO_STUDY",
    };

    setTaskList((prevList) => [...prevList, newTask]);
    setWorkModal(false);
  }

  return (
    <div className="px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
      {COLUMNS.map((column) => (
        <KanbanColum
          column={column}
          key={column}
          moveTask={moveTask}
          taskList={taskList}
        />
      ))}
      <AddTaskModal workModal={workModal} onAddTask={onAddTask} />
    </div>
  );
}
