import { Button } from "../common/Button";
import { InputText } from "../common/InputText";
import { useTaskForm } from "../../hooks/useTaskForm";

export const Form = ({ setTasks }) => {
  const { register, handleSubmit, errors, onSubmit } = useTaskForm(setTasks);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-800 p-6 rounded-lg space-y-4 max-w-md mx-auto"
    >
      <div className="flex flex-col">
        <InputText
          {...register("title")}
          className={`${errors.title ? "border-red-500" : ""}`}
        />
        {errors.title && (
          <p className="px-3 py-1 text-red-500">{errors.title.message}</p>
        )}
        <Button
          children="追加"
          type="submit"
          className="mt-4 font-semibold rounded-md bg-teal-500 hover:bg-teal-600"
        />
      </div>
    </form>
  );
};
