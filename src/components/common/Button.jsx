export const Button = ({ children, type, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 y-1 rounded text-white ${className}`}
    >
      {children}
    </button>
  );
};
