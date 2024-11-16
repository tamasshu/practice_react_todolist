import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import ConfirmDelete from "./ConfirmDelete";
import SortTasks from "./Sort";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { ...newTask, completed: false }]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clickDelete = (task) => {
    setTaskToDelete(task);
    setShowConfirm(true);
  };

  const confirmDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setTaskToDelete(null);
  };

  const updateTask = (id, priority, deadline) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id
          ? { ...task, priority: priority, deadline: deadline }
          : task
      )
    );
  };

  const sortTasks = (tasks, sortOption) => {
    switch (sortOption) {
      case "priorityAsc":
        return [...tasks].sort((a, b) => a.priority.localeCompare(b.priority));
      case "priorityDesc":
        return [...tasks].sort((a, b) => b.priority.localeCompare(a.priority));
      case "deadlineAsc":
        return [...tasks].sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
      case "deadlineDesc":
        return [...tasks].sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        );
      default:
        return tasks;
    }
  };

  const sortedTasks = sortTasks(tasks, sortOption);

  return (
    <div className="bg-gray-800 mx-auto p-40 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        React Todo App
      </h1>
      <Form addTask={addTask} />
      <div className="border-t border-gray-600 my-4"></div>
      <SortTasks setSortOption={setSortOption} />
      <List
        tasks={sortedTasks}
        completeTask={completeTask}
        clickDelete={clickDelete}
        updateTask={updateTask}
      />
      {showConfirm && (
        <ConfirmDelete
          task={taskToDelete}
          confirmDelete={confirmDelete}
          cancelDelete={cancelDelete}
        />
      )}
    </div>
  );
};

export default App;
