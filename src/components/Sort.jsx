import React from "react";

const SortTasks = ({ setSortOption }) => {
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex justify-end items-center my-6 mx-auto max-w-screen-lg">
      <label className="text-white mr-4">並び替え：</label>
      <select
        onChange={handleSortChange}
        className="p-3 rounded-md border border-gray-600 bg-gray-700 text-white"
      >
        <option value="">-</option>
        <option value="deadlineAsc">締切日順（昇順）</option>
        <option value="deadlineDesc">締切日順（降順）</option>
        <option value="priorityAsc">優先度順（昇順）</option>
        <option value="priorityDesc">優先度順（降順）</option>
      </select>
    </div>
  );
};

export default SortTasks;
