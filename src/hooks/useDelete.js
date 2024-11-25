export const useDelete = (setTasks) => {
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return deleteTask;
};
