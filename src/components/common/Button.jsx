export const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-3 y-1 rounded text-white ${className}`}
    >
      {label}
    </button>
  );
};
