export const usePriority = () => {
  const formatPriority = (priority) => {
    switch (priority) {
      case "高":
        return "text-red-500";
      case "中":
        return "text-yellow-500";
      case "低":
        return "text-green-500";
      default:
        return "text-gray-400";
    }
  };

  return { formatPriority };
};
