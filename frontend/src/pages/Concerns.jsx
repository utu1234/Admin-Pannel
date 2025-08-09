import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Payment delay', 'User cannot withdraw funds due to pending verification.', 'Open'],
  ['Profile issue', 'Doctor cannot upload certificate on profile page.', 'Resolved'],
  ['App crash', 'Mobile app crashes when booking appointment.', 'In Progress'],
  ['Notification bug', 'Users not receiving email notifications.', 'Open'],
  ['UI glitch', 'Sidebar overlaps main content on smaller screens.', 'Resolved'],
  ['Refund issue', 'Refund requests not processed correctly.', 'In Progress'],
];

const statusStyles = {
  Open: 'text-red-600 font-semibold',
  'In Progress': 'text-yellow-600 font-semibold',
  Resolved: 'text-green-600 font-semibold',
};

export default function Concerns() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Concerns</h2>

      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Title", "Description", "Status"].map((col, idx) => (
              <th
                key={idx}
                className="text-left px-6 py-3 text-sm font-semibold text-gray-700 tracking-wide"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sample.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="px-6 py-8 text-center text-gray-400 italic"
              >
                No concerns found
              </td>
            </tr>
          ) : (
            sample.map(([title, description, status], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-yellow-50 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 text-gray-800 whitespace-normal font-medium">
                  {title}
                </td>
                <td className="px-6 py-4 text-gray-700 whitespace-normal max-w-lg">
                  {description}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${statusStyles[status] || ''}`}>
                  {status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
