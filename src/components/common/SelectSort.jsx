export const SelectSort = ({ setSortType }) => {
  return (
    <div className="flex justify-end space-x-4 mb-4">
      <button
        onClick={() => setSortType("priority")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        優先度順
      </button>
      <button
        onClick={() => setSortType("deadline")}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        締切日順
      </button>
    </div>
  );
};
