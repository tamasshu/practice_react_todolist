import { Button } from "./Button";

export const SelectSort = ({ setSortType }) => {
  return (
    <div className="flex justify-end gap-4 px-6">
      <Button
        label="優先度順"
        onClick={() => setSortType("priority")}
        className="bg-teal-500 hover:bg-teal-600"
      />
      <Button
        label="締切日順"
        onClick={() => setSortType("deadline")}
        className="bg-teal-500 hover:bg-teal-600"
      />
    </div>
  );
};
