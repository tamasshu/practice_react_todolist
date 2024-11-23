import { useState } from "react";

export const useEdit = (tasks, setTasks) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleEdit = (task) => {
    setEditTaskId(task._id);
    setEditedTask({ ...task }); // 現在のタスク情報を編集用にコピー
  };

  const handleChange = (field, value) => {
    setEditedTask((prev) => ({ ...prev, [field]: value }));
  };

  const handleUpdate = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === editTaskId ? { ...task, ...editedTask } : task
      )
    );
    setEditTaskId(null); // 編集モードを解除
  };

  const handleCancel = () => {
    setEditTaskId(null); // 編集モードを解除
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
