import { COLUMNS } from "../constants/constants";
import { INITIAL_TASKS } from "../constants/mockdata";
import type { Task, TaskStatus } from "../types/models";
import KanbanColum from "./KanbanColum";
import { useState } from "react";

export default function KanbanBoard() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASKS);

  function moveTask(id: string, newStatus: TaskStatus) {
    const updatedTaskList: Task[] = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTaskList(updatedTaskList);
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
    </div>
  );
}
