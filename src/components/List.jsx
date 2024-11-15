import React from "react";

const List = ({ tasks = [], deleteTask, completeTask }) => {
  return (
    <ul className="max-w-lg mx-auto space-y-2">
      {tasks.map((item) => (
        <li
          key={item._id}
          className={`bg-gray-800 text-white p-4 rounded flex justify-between items-center ${
            item.completed ? "opacity-40" : ""
          }`}
        >
          {item.title}
          <div className="flex gap-6">
            <button
              className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-green-600"
              onClick={() => completeTask(item._id)}
            >
              完了
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600"
              onClick={() => deleteTask(item._id)}
            >
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
