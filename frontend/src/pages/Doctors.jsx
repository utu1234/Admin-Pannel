import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Dr. Anil Kumar', 'Cardiology', 'anil.kumar@mail.com', 'Active'],
  ['Dr. Meera Patel', 'Pediatrics', 'meera.patel@mail.com', 'Active'],
  ['Dr. Rajesh Khanna', 'Orthopedics', 'rajesh.khanna@mail.com', 'Inactive'],
  ['Dr. Sneha Gupta', 'Dermatology', 'sneha.gupta@mail.com', 'Active'],
  ['Dr. Amit Verma', 'Neurology', 'amit.verma@mail.com', 'Active'],
  ['Dr. Priya Sharma', 'Gynecology', 'priya.sharma@mail.com', 'Inactive'],
];

const statusStyles = {
  Active: 'text-green-600 font-semibold',
  Inactive: 'text-red-600 font-semibold',
};

export default function Doctors() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Doctors</h2>

      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Name", "Specialty", "Email", "Status"].map((col, idx) => (
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
                No doctors found
              </td>
            </tr>
          ) : (
            sample.map(([name, specialty, email, status], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap font-medium">{name}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{specialty}</td>
                <td className="px-6 py-4 text-blue-600 underline whitespace-nowrap">{email}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${statusStyles[status] || ''}`}>{status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
