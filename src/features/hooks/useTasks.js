import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  return [tasks, setTasks];
};
