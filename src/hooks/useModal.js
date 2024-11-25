import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(null);

  const openModal = (task) => {
    setTask(task);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask(null);
  };

  return { isOpen, task, openModal, closeModal };
};
