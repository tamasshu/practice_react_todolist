import { getTaskClass } from "../../lib/utils/className";
import { Button } from "../common/Button";
import { InputDeadline } from "../common/InputDeadline";
import { SelectPriority } from "../common/SelectPriority";
import { useEdit } from "../../hooks/useEdit";

export const List = ({ tasks, setTasks, openModal, completeTask }) => {
  const {
    editTaskId,
    editedTask,
    handleEdit,
    handleChange,
    handleUpdate,
    handleCancel,
  } = useEdit(tasks, setTasks);

  return (
    <ul className="mx-auto space-y-4 p-6">
      {tasks.map((task) => (
        <li key={task._id} className={getTaskClass(task.completed)}>
          {task.title}
          {editTaskId === task._id ? (
            <div className="flex gap-4">
              <SelectPriority
                value={editedTask.priority}
                onChange={(e) => handleChange("priority", e.target.value)}
              />
              <InputDeadline
                value={editedTask.deadline}
                onChange={(e) => handleChange("deadline", e.target.value)}
              />
              <Button
                children="更新"
                onClick={() => handleUpdate(task)}
                className="bg-green-500 hover:bg-green-600"
              />
              <Button
                children="キャンセル"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-600"
              />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p>優先度： {task.priority}</p>
              <p>締切日： {task.deadline}</p>
              <Button
                children="編集"
                onClick={() => handleEdit(task)}
                className="bg-blue-500 hover:bg-blue-600"
              />
              <Button
                children="完了"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => completeTask(task._id)}
              />
              <Button
                children="削除"
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
