import { COLUMNS } from "../constants/constants";
import KanbanColum from "./KanbanColum";

export default function KanbanBoard() {
  return (
    <div className="px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
      {COLUMNS.map((column) => (
        <KanbanColum column={column} key={column} />
      ))}
    </div>
  );
}
