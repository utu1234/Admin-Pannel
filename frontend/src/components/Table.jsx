import React from 'react';

export default function Table({ columns = [], data = [], className = '' }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {columns.map((c, i) => (
              <th
                key={i}
                className="text-left px-6 py-3 text-sm font-semibold text-gray-700 tracking-wide"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-8 text-sm text-center text-gray-400 italic"
              >
                No records found
              </td>
            </tr>
          )}
          {data.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={`${rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
