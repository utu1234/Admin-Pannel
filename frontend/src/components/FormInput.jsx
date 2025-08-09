import React from "react";

export default function FormInput({ label, ...props }) {
  return (
    <label className="block text-sm">
      {label && (
        <div className="mb-1 font-semibold text-gray-700">
          {label}
        </div>
      )}
      <input
        {...props}
        className="
          w-full
          px-4 py-2
          border border-gray-300
          rounded-md
          bg-white
          text-sm text-gray-900
          placeholder-gray-400
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition
          duration-200
          ease-in-out
          disabled:bg-gray-100 disabled:text-gray-400
        "
      />
    </label>
  );
}
