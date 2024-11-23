import { getTaskClass } from "../../lib/utils/className";
import { Button } from "../common/Button";
import { InputDeadline } from "../common/InputDeadline";
import { SelectPriority } from "../common/SelectPriority";
import { usePriority } from "../../features/hooks/usePriority";
import { useDeadline } from "../../features/hooks/useDeadline";
import { useEdit } from "../../features/hooks/useEdit";

export const List = ({ tasks, openModal, completeTask }) => {
  const { formatDeadline } = useDeadline();
  const { formatPriority } = usePriority();
  const {
    editTaskId,
    editedTask,
    handleEdit,
    handleChange,
    handleUpdate,
    handleCancel,
  } = useEdit(tasks);

  return (
    <ul className="max-w-lg mx-auto space-y-4 p-6">
      {tasks.map((task) => (
        <li key={task._id} className={getTaskClass(task.completed)}>
          {task.title}
          {editTaskId === task._id ? (
            <div className="flex gap-6">
              <SelectPriority
                value={editedTask.priority}
                onChange={(e) => handleChange("priority", e.target.value)}
              />
              <InputDeadline
                value={editedTask.deadline}
                onChange={(e) => handleChange("deadline", e.task.deadline)}
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
              <Button
                label="完了"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => completeTask(task._id)}
              />
              <Button
                label="削除"
                className="bg-red-500 hover:bg-red-600"
                onClick={() => openModal(task)}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
