import React from "react";

const ConfirmDelete = ({ task, onDelete, onCancel }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-16 text-center">
          本当に削除しますか？
        </h2>
        <div className="flex flex-col items-center mb-16">
          <p className="mb-4">タスク： {task.title}</p>
          <p className="mb-4">優先度： {task.priority}</p>
          <p className="mb-4">締切日： {task.deadline}</p>
        </div>
        <div className="flex justify-center gap-6">
          <button
            onClick={() => onDelete(task._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            削除
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
