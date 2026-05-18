import Modal from "react-modal";
import { useState } from "react";

type AddTaskModal = {
  isAddTaskModalOpen: boolean;
  onAddTask: (title: string, description: string) => void;
  closeAddTaskModal: () => void;
};

export default function AddTaskModal({
  isAddTaskModalOpen,
  onAddTask,
  closeAddTaskModal,
}: AddTaskModal) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!taskTitle.trim()) {
      return;
    }
    if (!taskDescription.trim()) {
      return;
    }

    onAddTask(taskTitle, taskDescription);

    setTaskTitle("");
    setTaskDescription("");
  }

  function handleCancel() {
    setTaskTitle("");
    setTaskDescription("");
    closeAddTaskModal();
  }
  return (
    <Modal
      isOpen={isAddTaskModalOpen}
      onRequestClose={closeAddTaskModal}
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex items-center justify-center w-screen"
      }
      className={
        "p-10 rounded-2xl bg-card/50 w-100 h-100 md:w-100 border border-border"
      }
    >
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label>
            <p>Título</p>
            <input
              autoFocus={isAddTaskModalOpen}
              type="text"
              value={taskTitle}
              placeholder="Ex: Criar Modal"
              onChange={(e) => setTaskTitle(e.target.value)}
              className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none border-border focus:ring-2 focus:ring-ring`}
            />
          </label>
          <label>
            <p>Descrição</p>
            <input
              type="text"
              value={taskDescription}
              placeholder="Descrição"
              onChange={(e) => setTaskDescription(e.target.value)}
              className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none border-border focus:ring-2 focus:ring-ring`}
            />
          </label>
          <button
            type="button"
            onClick={handleCancel}
            className="text-muted-foreground hover:underline cursor-pointer mt-10"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="text-muted-foreground hover:underline cursor-pointer mt-10"
          >
            CRIAR
          </button>
        </form>
      </div>
    </Modal>
  );
}
