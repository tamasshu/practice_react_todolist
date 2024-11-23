import { useForm } from "react-hook-form";
import { schemaResolver } from "../../lib/validation/schema";

export const useTaskForm = (setTasks) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: schemaResolver,
    defaultValues: { title: "" },
  });

  const onSubmit = async (task) => {
    const newTask = {
      _id: Date.now(),
      title: task.title,
      priority: task.priority,
      deadline: task.deadline,
      completed: false,
    };

    await setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      return updatedTasks;
    });

    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
