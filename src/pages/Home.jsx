import { Form } from "../components/layout/Form";
import { List } from "../components/layout/List";
import { useComplete } from "../hooks/useComplete";
import { useDelete } from "../hooks/useDelete";
import { useTasks } from "../hooks/useTasks";

export const Home = () => {
  const [tasks, setTasks] = useTasks();
  const completeTask = useComplete(tasks, setTasks);
  const deleteTask = useDelete(setTasks);

  return (
    <div className="bg-gray-800 mx-auto p-40 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-4 text-center">
        React Todo App
      </h1>
      <Form setTasks={setTasks} />
      <div className="border-t border-gray-600 my-4"></div>
      <List tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};
