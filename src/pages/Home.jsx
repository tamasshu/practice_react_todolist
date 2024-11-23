import { Modal } from "../components/layout/Modal";
import { Form } from "../components/layout/Form";
import { List } from "../components/layout/List";
import { SelectSort } from "../components/common/SelectSort";
import { useComplete } from "../features/hooks/useComplete";
import { useDelete } from "../features/hooks/useDelete";
import { useTasks } from "../features/hooks/useTasks";
import { useModal } from "../features/hooks/useModal";
import { useSort } from "../features/hooks/useSort";

export const Home = () => {
  const [tasks, setTasks] = useTasks();
  const [setSortType, sortTasks] = useSort();
  const completeTask = useComplete(tasks, setTasks);
  const deleteTask = useDelete(setTasks);
  const { isOpen, task, openModal, closeModal } = useModal();

  const confirmDelete = () => {
    deleteTask(task._id);
    closeModal();
  };

  const sortedTasks = sortTasks(tasks);

  return (
    <div className="bg-gray-800 mx-auto p-40 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        React Todo App
      </h1>
      <Form setTasks={setTasks} />
      <div className="border-t border-gray-600 my-4"></div>
      <SelectSort setSortType={setSortType} />
      <List
        tasks={sortedTasks}
        setTasks={setTasks}
        completeTask={completeTask}
        openModal={openModal}
      />
      <Modal
        task={task}
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
};
