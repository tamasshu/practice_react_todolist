export const useDeadline = () => {
  const formatDeadline = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("ja-JP", options);
  };

  return { formatDeadline };
};
