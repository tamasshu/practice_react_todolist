import { useState } from "react";

export const useEdit = (tasks, setTasks) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleEdit = (task) => {
    setEditTaskId(task._id);
    setEditedTask({ ...task });
  };

  const handleChange = (field, value) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    const updatedTasks = tasks.map((task) =>
      task._id === editTaskId ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTasks);

    setEditTaskId(null);
    setEditedTask({});
  };

  const handleCancel = () => {
    setEditTaskId(null);
    setEditedTask({});
  };

  return {
    editTaskId,
    editedTask,
    handleEdit,
    handleChange,
    handleUpdate,
    handleCancel,
  };
};
