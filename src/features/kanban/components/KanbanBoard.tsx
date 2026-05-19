import useTasks from "../../../hooks/useTasks";
import { COLUMNS } from "../constants/constants";
import KanbanColum from "./KanbanColum";
import TaskDetailsModal from "./TaskDetailsModal";

export default function KanbanBoard() {
  const { taskList, moveTask, onRemoveTask } = useTasks();
  return (
    <div className="px-4 py-2 grid grid-cols-1 md:grid-cols-4 gap-6 h-full items-start">
      {COLUMNS.map((column) => (
        <KanbanColum
          column={column}
          key={column}
          moveTask={moveTask}
          taskList={taskList}
          onRemoveTask={onRemoveTask}
        />
      ))}
      <TaskDetailsModal />
    </div>
  );
}
