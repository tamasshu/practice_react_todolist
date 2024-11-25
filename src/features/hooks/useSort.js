import { useState } from "react";

export const useSort = () => {
  const [sortType, setSortType] = useState("");

  const sortTasks = (tasks) => {
    if (!Array.isArray(tasks)) return [];

    return [...tasks].sort((a, b) => {
      switch (sortType) {
        case "priority-high": {
          const priorityOrder = { 高: 1, 中: 2, 低: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        case "priority-low": {
          const priorityOrder = { 高: 3, 中: 2, 低: 1 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        case "deadline-early": {
          const dateA = new Date(a.deadline || Infinity);
          const dateB = new Date(b.deadline || Infinity);
          return dateA - dateB;
        }
        case "deadline-late": {
          const dateA = new Date(a.deadline || -Infinity);
          const dateB = new Date(b.deadline || -Infinity);
          return dateB - dateA;
        }
        default:
          return 0;
      }
    });
  };

  return [setSortType, sortTasks];
};
