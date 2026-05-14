import type { Task, TaskStatus } from "../types/models";

interface ITaskCard {
  task: Task;
  moveTask: (id: string, newStatus: TaskStatus) => void;
  onRemoveTask: (id: string) => void;
}

export default function TaskCard({ task, moveTask, onRemoveTask }: ITaskCard) {
  function handleMoveCardRight() {
    if (task.status === "TO_STUDY") {
      moveTask(task.id, "STUDYING");
    }
    if (task.status === "STUDYING") {
      moveTask(task.id, "COMPLETED");
    }
  }

  function handleMoveCardLeft() {
    if (task.status === "STUDYING") {
      moveTask(task.id, "TO_STUDY");
    }
    if (task.status === "COMPLETED") {
      moveTask(task.id, "STUDYING");
    }
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 hover:border-green-600/40 transition-color">
      <h4 className="text-sm font-semibold text-slate-800">{task.title}</h4>
      <button onClick={() => onRemoveTask(task.id)}>Delete</button>

      {task.status === "TO_STUDY" && (
        <button
          onClick={handleMoveCardRight}
          className="border border-slate-200 py-1 px-2 rounded-sm"
        >
          Avançar
        </button>
      )}

      {task.status === "STUDYING" && (
        <>
          <button
            onClick={handleMoveCardLeft}
            className="border border-slate-200 py-1 px-2 rounded-sm"
          >
            Voltar
          </button>
          <button
            onClick={handleMoveCardRight}
            className="border border-slate-200 py-1 px-2 rounded-sm"
          >
            Avançar
          </button>
        </>
      )}

      {task.status === "COMPLETED" && (
        <button
          onClick={handleMoveCardLeft}
          className="border border-slate-200 py-1 px-2 rounded-sm"
        >
          Voltar
        </button>
      )}
    </div>
  );
}
