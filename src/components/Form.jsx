import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("中");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() === "") return;

    const newTask = {
      _id: Date.now(),
      title: taskTitle,
      priority: priority,
      deadline: deadline,
    };

    addTask(newTask);
    setTaskTitle("");
    setPriority("中");
    setDeadline("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg space-y-4"
    >
      <div className="flex items-center justify-center gap-6">
        <input
          name="title"
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-96 p-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="タスクを入力してください"
        />
        <select
          className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="低">低</option>
          <option value="中">中</option>
          <option value="高">高</option>
        </select>
        <input
          type="date"
          className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <input
          type="submit"
          value="追加"
          className="px-4 py-3 bg-teal-500 text-white font-semibold rounded-md cursor-pointer hover:bg-teal-600 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        />
      </div>
    </form>
  );
};

export default Form;
