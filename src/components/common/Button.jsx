export const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 y-1 rounded text-white ${className}`}
    >
      {label}
    </button>
  );
};
