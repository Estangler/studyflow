import type { IKanbanBoard } from "../types/models";
import { KANBAN_COLUMNS } from "../constants/constants";

export default function KanbanColum({ column }: IKanbanBoard) {
  return (
    <div className="bg-slate-100/50 rounded-xl p-4 flex flex-col min-h-125 border border-slate-200">
      <div className="flex justify-between">
        <h3 className="font-bold text-slate-700 mb-4 px-2">
          {KANBAN_COLUMNS[column]}
        </h3>
        <p className="bg-white border border-slate-200 rounded-full flex items-center justify-center text-xs text-slate-700 w-6 h-6">
          0
        </p>
      </div>
      <div className="flex flex-col gap-3"></div>
    </div>
  );
}
