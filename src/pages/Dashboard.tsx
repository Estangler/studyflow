import {
  COLUMNS,
  KANBAN_COLUMNS,
} from "../features/kanban/constants/constants";

export default function Dashboard() {
  return (
    <div className="px-4 py-2">
      {COLUMNS.map((col) => (
        <div>
          <p>{KANBAN_COLUMNS[col]}</p>
        </div>
      ))}
    </div>
  );
}
