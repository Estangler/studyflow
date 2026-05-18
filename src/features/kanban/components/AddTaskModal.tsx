import Modal from "react-modal";
import { useState } from "react";

type AddTaskModal = {
  workModal: boolean;
  onAddTask: (title: string) => void;
  closeAddTaskModal: () => void;
};

export default function AddTaskModal({
  workModal,
  onAddTask,
  closeAddTaskModal,
}: AddTaskModal) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!taskTitle.trim()) {
      return;
    }

    onAddTask(taskTitle);

    setTaskTitle("");
    closeAddTaskModal();
  }

  function abbortNewTask() {
    setTaskTitle("");
    closeAddTaskModal();
  }
  return (
    <Modal isOpen={workModal}>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Título</p>
            <input
              autoFocus={workModal}
              type="text"
              value={taskTitle}
              placeholder="Ex: Criar Modal"
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-600/40 outline-0"
            />
          </label>
          <button type="submit" onClick={abbortNewTask}>
            Cancelar
          </button>
        </form>
      </div>
    </Modal>
  );
}
