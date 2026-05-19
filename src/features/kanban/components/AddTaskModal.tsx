import Modal from "react-modal";
import { useState, type ChangeEvent } from "react";
import type { NewTaskFormData, Task } from "../types/models";
import { INITIAL_NEW_TASK_FORM } from "../constants/constants";

type AddTaskModal = {
  isAddTaskModalOpen: boolean;
  onAddTask: (newTaskData: Omit<Task, "id">) => void;
  closeAddTaskModal: () => void;
};

export default function AddTaskModal({
  isAddTaskModalOpen,
  onAddTask,
  closeAddTaskModal,
}: AddTaskModal) {
  const [newTaskData, setNewTaskData] = useState<NewTaskFormData>(
    INITIAL_NEW_TASK_FORM,
  );

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setNewTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const { title, description, status, priority } = newTaskData;

    if (!title.trim()) {
      return;
    }

    onAddTask({
      title: title.trim(),
      description,
      status,
      priority,
    });

    setNewTaskData({
      title: "",
      description: "",
      status: "ONBOARD",
      priority: "LOW",
    });
  }

  function handleCancel() {
    setNewTaskData({
      title: "",
      description: "",
      status: "ONBOARD",
      priority: "LOW",
    });
    closeAddTaskModal();
  }

  return (
    <Modal
      isOpen={isAddTaskModalOpen}
      onRequestClose={handleCancel}
      overlayClassName={
        "fixed inset-0 backdrop-blur-sm flex items-center justify-center w-screen"
      }
      className={
        "p-10 rounded-2xl bg-card/50 w-100 md:w-100 border border-border"
      }
    >
      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-3.5 flex flex-col gap-2"
        >
          <label>
            <p>Título</p>
            <input
              autoFocus={isAddTaskModalOpen}
              name="title"
              type="text"
              value={newTaskData.title}
              placeholder="Ex: Criar Modal"
              onChange={handleInputChange}
              className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none border-border focus:ring-2 focus:ring-ring`}
            />
          </label>
          <label>
            <p>Descrição</p>
            <input
              type="text"
              name="description"
              value={newTaskData.description}
              placeholder="Descrição"
              onChange={handleInputChange}
              className={`w-full rounded-md border bg-background px-3 py-2 text-sm transition-all duration-300 focus:outline-none border-border focus:ring-2 focus:ring-ring`}
            />
          </label>

          <div className="flex gap-2">
            <div className="flex flex-col w-full">
              <p>Prioridade</p>
              <select
                className="bg-card border p-2 border-border rounded-md outline-0 text-sm flex-1"
                value={newTaskData.priority}
                name="priority"
                onChange={handleInputChange}
              >
                <option value="LOW">Baixa</option>
                <option value="MEDIUM">Media</option>
                <option value="HIGH">Alta</option>
                <option value="URGENT">Urgente</option>
              </select>
            </div>

            <div className="flex flex-col w-full">
              <p>Status</p>
              <select
                className="bg-card border p-2 border-border rounded-md outline-0 text-sm flex-1"
                value={newTaskData.status}
                name="status"
                onChange={handleInputChange}
              >
                <option value="ONBOARD">Onboard</option>
                <option value="TODO">A fazer</option>
                <option value="PROGRESS">Progresso</option>
                <option value="COMPLETED">Done</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-5 text-sm">
            <button
              type="button"
              onClick={handleCancel}
              className="text-muted-foreground hover:underline cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="text-foreground bg-primary active:scale-95 cursor-pointer h-8 px-2 rounded-md"
            >
              Criar Nova tarefa
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
