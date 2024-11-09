import React from "react";

const List = ({ tasks = [], deleteTask }) => (
  <ul className="max-w-lg mx-auto space-y-2">
    {tasks.map((item, key) => {
      return (
        <li
          key={key}
          className="bg-gray-800 text-white p-4 rounded flex justify-between items-center"
        >
          {item.title}
          <span
            className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600"
            onClick={() => deleteTask(item._id)}
          >
            削除
          </span>
        </li>
      );
    })}
  </ul>
);

export default List;
