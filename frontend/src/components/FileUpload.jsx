import React from 'react';

export default function FileUpload({ onChange }) {
  return (
    <label className="inline-block cursor-pointer rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm 
      hover:bg-gray-50 hover:border-blue-500 transition-colors duration-200
      focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
      select-none"
    >
      <input type="file" onChange={onChange} className="sr-only" />
      Choose a file
    </label>
  );
}
