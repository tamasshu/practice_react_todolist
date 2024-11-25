export const useComplete = (tasks, setTasks) => {
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return completeTask;
};
