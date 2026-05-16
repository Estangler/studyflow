import type { IKanbanBoard, Task } from "../types/models";
import { KANBAN_COLUMNS } from "../constants/constants";
import TaskCard from "./TaskCard";

export default function KanbanColum({
  column,
  moveTask,
  taskList,
  onRemoveTask,
}: IKanbanBoard) {
  const filteredList: Task[] = taskList.filter(
    (task) => task.status === column,
  );

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-background/50 p-3">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-current text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">
            {KANBAN_COLUMNS[column]}
          </span>
          <span className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {filteredList.map((task) => task.status).length}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {filteredList.map((task) => (
          <TaskCard
            task={task}
            moveTask={moveTask}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}
