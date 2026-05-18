import useTasks from "../../../hooks/useTasks";
import Modal from "react-modal";
import type { Task } from "../types/models";

type TaskDetailsModalProps = {
  task: Task;
};

export default function TaskDetailsModal({ task }: TaskDetailsModalProps) {
  const { isTaskDetailsModalOpen, closeTaskDetails } = useTasks();

  return (
    <Modal
      isOpen={isTaskDetailsModalOpen}
      onRequestClose={closeTaskDetails}
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex h-full items-center justify-end w-screen"
      }
      className={"p-10 bg-card/50 h-full md:w-120 border border-border"}
    >
      <h1>{task.title}</h1>
    </Modal>
  );
}
