import type { Task, TaskStatus } from "../types/models";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface ITaskCard {
  task: Task;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  onRemoveTask: (id: string) => void;
}

export default function TaskCard({ task, moveTask, onRemoveTask }: ITaskCard) {
  function handleMoveCardRight() {
    if (task.status === "TODO") {
      moveTask(task.id, "PROGRESS");
    }
    if (task.status === "PROGRESS") {
      moveTask(task.id, "COMPLETED");
    }
  }

  function handleMoveCardLeft() {
    if (task.status === "PROGRESS") {
      moveTask(task.id, "TODO");
    }
    if (task.status === "COMPLETED") {
      moveTask(task.id, "PROGRESS");
    }
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-3 text-left transition-all duration-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring">
      <button onClick={() => onRemoveTask(task.id)}>
        <X size={12} />
      </button>
      <button>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium leading-snug text-foreground">
            {task.title}
          </p>
          <p className="text-[10px] bg-primary">{task.priority}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground truncate">
          {task.description}
        </p>
      </button>
      <div>
        <button onClick={handleMoveCardLeft}>
          <ArrowLeft size={12} />
        </button>
        <button onClick={handleMoveCardRight}>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
