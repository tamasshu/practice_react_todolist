import React from "react";

export const InputDeadline = React.forwardRef(
  ({ name = "deadline", onChange, className = "", value }, ref) => {
    return (
      <input
        name={name}
        type="date"
        onChange={onChange}
        className={`p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
        value={value}
        ref={ref}
      />
    );
  }
);
