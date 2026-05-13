import type { IKanbanBoard } from "../types/models";
import { KANBAN_COLUMNS } from "../constants/constants";

export default function KanbanColum({ column }: IKanbanBoard) {
  return (
    <div className="bg-slate-100/50 rounded-xl p-4 flex flex-col min-h-125 border border-slate-200">
      <h3 className="font-bold text-slate-700 mb-4 px-2">
        {KANBAN_COLUMNS[column]}
      </h3>
      <div className="flex flex-col gap-3"></div>
    </div>
  );
}
