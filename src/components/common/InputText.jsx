import React from "react";

export const InputText = React.forwardRef(
  (
    {
      value,
      onChange,
      placeholder = "タスクを入力してください",
      className = "",
      type = "text",
      name = "title",
    },
    ref
  ) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={`p-3 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
      />
    );
  }
);
