import useAddTaskModal from "../../../hooks/useAddTaskModal";
import useTasks from "../../../hooks/useTasks";
import { COLUMNS } from "../constants/constants";
import AddTaskModal from "./AddTaskModal";
import KanbanColum from "./KanbanColum";

export default function KanbanBoard() {
  const { moveTask, onAddTask, onRemoveTask, taskList } = useTasks();
  const { workModal } = useAddTaskModal();

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
      <AddTaskModal workModal={workModal} onAddTask={onAddTask} />
    </div>
  );
}
