import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;

    const newTask = {
      _id: Date.now(),
      title: taskTitle,
    };

    addTask(newTask);
    setTaskTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg space-y-4 max-w-md mx-auto"
    >
      <div className="flex flex-col">
        <input
          name="title"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="タスクを入力してください"
        />
        <input
          type="submit"
          value="追加"
          className="mt-4 p-3 bg-teal-500 text-white font-semibold rounded-md cursor-pointer hover:bg-teal-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        />
      </div>
    </form>
  );
};

export default Form;
