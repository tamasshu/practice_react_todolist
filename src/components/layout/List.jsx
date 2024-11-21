import { getTaskClass } from "../../lib/utils/className";
import { Button } from "../common/Button";

export const List = ({ tasks, deleteTask, completeTask }) => {
  return (
    <ul className="max-w-lg mx-auto space-y-4 p-6">
      {tasks.map((task) => (
        <li key={task._id} className={getTaskClass(task.completed)}>
          {task.title}
          <div className="flex gap-6">
            <Button
              label="完了"
              className="bg-green-500 hover:bg-green-600"
              onClick={() => completeTask(task._id)}
            />
            <Button
              label="削除"
              className="bg-red-500 hover:bg-red-600"
              onClick={() => deleteTask(task._id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
