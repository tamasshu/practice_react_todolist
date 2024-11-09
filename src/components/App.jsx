import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  return (
    <div className="bg-gray-800 mx-auto p-40 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        React Todo App
      </h1>
      <Form addTask={addTask} />
      <div className="border-t border-gray-600 my-4"></div>
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
