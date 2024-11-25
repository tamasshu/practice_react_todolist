export const getTaskClass = (completed) => {
  const baseClasses =
    "bg-gray-800 text-white rounded flex justify-between items-center";
  const completedClasses = completed ? "opacity-40" : "";

  return `${baseClasses} ${completedClasses}`.trim();
};
