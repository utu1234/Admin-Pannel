import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Rohan Sharma', 'Dr. Anil Kumar', '2025-08-12 10:00 AM', 'Scheduled'],
  ['Priya Singh', 'Dr. Meera Patel', '2025-08-12 11:00 AM', 'Completed'],
  ['Amit Verma', 'Dr. Rajesh Khanna', '2025-08-13 09:30 AM', 'Cancelled'],
  ['Sneha Gupta', 'Dr. Anil Kumar', '2025-08-14 02:00 PM', 'Scheduled'],
  ['Vikram Rathore', 'Dr. Meera Patel', '2025-08-15 01:00 PM', 'Completed'],
  ['Neha Joshi', 'Dr. Rajesh Khanna', '2025-08-16 03:30 PM', 'Scheduled'],
];

const statusColors = {
  Scheduled: 'text-blue-600 font-semibold',
  Completed: 'text-green-600 font-semibold',
  Cancelled: 'text-red-600 font-semibold',
};

export default function Appointments() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Appointments</h2>

      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Patient", "Doctor", "Date & Time", "Status"].map((col, idx) => (
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
                colSpan={4}
                className="px-6 py-8 text-center text-gray-400 italic"
              >
                No appointments found
              </td>
            </tr>
          ) : (
            sample.map(([patient, doctor, datetime, status], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap">
                  {patient}
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap">
                  {doctor}
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap">
                  {datetime}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap ${statusColors[status] || ''}`}>
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
