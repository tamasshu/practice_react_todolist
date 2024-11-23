import { useState } from "react";

export const useSort = () => {
  const [sortType, setSortType] = useState("");

  const sortTasks = (tasks) => {
    if (!Array.isArray(tasks)) return [];

    return [...tasks].sort((a, b) => {
      if (sortType === "priority") {
        const priorityOrder = { 高: 1, 中: 2, 低: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else if (sortType === "deadline") {
        const dateA = new Date(a.deadline || Infinity);
        const dateB = new Date(b.deadline || Infinity);
        return dateA - dateB;
      }
      return 0;
    });
  };

  return [setSortType, sortTasks];
};
