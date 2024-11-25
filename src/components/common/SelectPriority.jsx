import React from "react";

export const SelectPriority = React.forwardRef(
  ({ name = "priority", onChange, className = "", value }, ref) => {
    return (
      <select
        name={name}
        className={`p-3 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none ${className}`}
        value={value}
        onChange={onChange}
        ref={ref}
      >
        <option value="低">低</option>
        <option value="中">中</option>
        <option value="高">高</option>
      </select>
    );
  }
);
