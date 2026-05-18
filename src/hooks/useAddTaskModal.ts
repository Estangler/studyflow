import { useState } from "react";

export default function useAddTaskModal() {
  const [workModal, setWorkModal] = useState<boolean>(false);

  return {
    workModal,
    setWorkModal,
  };
}
