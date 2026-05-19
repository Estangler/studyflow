import useTasks from "../../../hooks/useTasks";
import Modal from "react-modal";

export default function TaskDetailsModal() {
  const { taskList, onSelectTaskId, selectedTaskId } = useTasks();
  const task = taskList.find((task) => task.id === selectedTaskId);

  function closeTaskDetails() {
    onSelectTaskId(null);
  }

  return (
    <Modal
      isOpen={!!selectedTaskId}
      onRequestClose={closeTaskDetails}
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex h-full items-center justify-end w-screen"
      }
      className={"p-10 bg-card/50 h-full md:w-120 border border-border"}
    >
      <p>{task?.title}</p>
    </Modal>
  );
}
