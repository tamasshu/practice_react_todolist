import React from "react";

export const SelectPriority = React.forwardRef(
  ({ onChange, className = "", priority }, ref) => {
    return (
      <select
        className={`p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none ${className}`}
        value={priority}
        onChange={onChange}
        ref={ref}
      >
        <option value="low">低</option>
        <option value="middle">中</option>
        <option value="high">高</option>
      </select>
    );
  }
);
