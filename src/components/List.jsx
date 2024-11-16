import React, { useState } from "react";

const List = ({ tasks = [], completeTask, clickDelete, updateTask }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [updatePriority, setUpdatePriority] = useState("");
  const [updateDeadline, setUpdateDeadline] = useState("");

  const handleEdit = (task) => {
    setEditTaskId(task._id);
    setUpdatePriority(task.priority);
    setUpdateDeadline(task.deadline);
  };

  const handleUpdate = (task) => {
    updateTask(task._id, updatePriority, updateDeadline);
    setEditTaskId(null);
  };

  return (
    <ul className="flex flex-col gap-4 mx-auto max-w-screen-lg">
      {tasks.map((task) => (
        <li
          key={task._id}
          className={`bg-gray-800 text-white rounded flex justify-between items-center gap-6 mb-6" ${
            task.completed ? "opacity-40" : ""
          }`}
        >
          {task.title}
          {editTaskId === task._id ? (
            <div className="flex gap-6">
              <select
                value={updatePriority}
                onChange={(e) => setUpdatePriority(e.target.value)}
                className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
              >
                <option value="低">低</option>
                <option value="中">中</option>
                <option value="高">高</option>
              </select>

              <input
                type="date"
                value={updateDeadline}
                onChange={(e) => setUpdateDeadline(e.target.value)}
                className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
              />

              <button
                onClick={() => handleUpdate(task)}
                className="bg-green-500 text-white font-semibold px-4 py-3 rounded-md cursor-pointer hover:bg-green-600"
              >
                更新
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <p>優先度： {task.priority}</p>
              <p>締切日： {task.deadline}</p>
              <button
                onClick={() => handleEdit(task)}
                className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-blue-600"
              >
                編集
              </button>
              <button
                className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-600"
                onClick={() => completeTask(task._id)}
              >
                完了
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600"
                onClick={() => clickDelete(task)}
              >
                削除
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;