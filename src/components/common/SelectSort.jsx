export const SelectSort = ({ setSortType }) => {
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className="flex justify-end px-6">
      <select
        onChange={handleSortChange}
        className="bg-gray-700 text-white border border-gray-600 rounded-md p-2"
      >
        <option value="sort-none">-</option>
        <option value="priority-high">優先度（高）</option>
        <option value="priority-low">優先度（低）</option>
        <option value="deadline-early">締切日（早）</option>
        <option value="deadline-late">締切日（遅）</option>
      </select>
    </div>
  );
};
