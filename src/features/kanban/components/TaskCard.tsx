import useTasks from "../../../hooks/useTasks";
import type { Task, TaskStatus } from "../types/models";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import TaskDetailsModal from "./TaskDetailsModal";

interface ITaskCard {
  task: Task;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  onRemoveTask: (id: string) => void;
}

export default function TaskCard({ task, moveTask, onRemoveTask }: ITaskCard) {
  const { openTaskDetails } = useTasks();
  function handleMoveCardRight() {
    if (task.status === "ONBOARD") {
      moveTask(task.id, "TODO");
    }
    if (task.status === "TODO") {
      moveTask(task.id, "PROGRESS");
    }
    if (task.status === "PROGRESS") {
      moveTask(task.id, "COMPLETED");
    }
  }

  function handleMoveCardLeft() {
    if (task.status === "TODO") {
      moveTask(task.id, "ONBOARD");
    }
    if (task.status === "PROGRESS") {
      moveTask(task.id, "TODO");
    }
    if (task.status === "COMPLETED") {
      moveTask(task.id, "PROGRESS");
    }
  }

  return (
    <div className="flex flex-col justify-between gap-2 rounded-lg border border-border bg-card p-3 text-left transition-all duration-300 hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring h-55">
      <div className="flex justify-between items-center">
        <button
          onClick={() => onRemoveTask(task.id)}
          className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
        >
          <X size={12} />
        </button>
        <p className="text-[10px] rounded-md px-1.5 py-0.5 bg-accent-foreground/10">
          {task.priority}
        </p>
      </div>
      <button
        className="hover:bg-accent-foreground/10 rounded-md p-1.5 transition-all duration-300 h-full"
        onClick={() => openTaskDetails()}
      >
        <div className="flex justify-between items-center space-y-1.5">
          <p className="text-sm font-medium leading-snug text-foreground">
            {task.title}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground h-full text-left">
          {task.description}
        </p>
      </button>
      <div className="flex gap-2 border-t pt-3 border-border">
        {task.status === "ONBOARD" ? (
          <button
            onClick={handleMoveCardRight}
            className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
          >
            <ArrowRight size={16} />
          </button>
        ) : (
          ""
        )}

        {task.status === "PROGRESS" ? (
          <>
            <button
              onClick={handleMoveCardLeft}
              className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleMoveCardRight}
              className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
            >
              <ArrowRight size={16} />
            </button>
          </>
        ) : (
          ""
        )}
        {task.status === "TODO" ? (
          <>
            <button
              onClick={handleMoveCardLeft}
              className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleMoveCardRight}
              className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
            >
              <ArrowRight size={16} />
            </button>
          </>
        ) : (
          ""
        )}

        {task.status === "COMPLETED" ? (
          <button
            onClick={handleMoveCardLeft}
            className="rounded-md p-1.5 text-muted-foreground transition-all duration-300 hover:bg-accent-foreground/10 hover:text-foreground cursor-pointer w-fit"
          >
            <ArrowLeft size={16} />
          </button>
        ) : (
          ""
        )}
      </div>
      <TaskDetailsModal task={task} />
    </div>
  );
}
