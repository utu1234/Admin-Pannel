import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Rohan Sharma', 'rohan.sharma@mail.com', 'Male', '25'],
  ['Priya Singh', 'priya.singh@mail.com', 'Female', '30'],
  ['Amit Verma', 'amit.verma@mail.com', 'Male', '40'],
  ['Sneha Gupta', 'sneha.gupta@mail.com', 'Female', '28'],
  ['Karan Mehta', 'karan.mehta@mail.com', 'Male', '35'],
  ['Anita Das', 'anita.das@mail.com', 'Female', '32'],
];

export default function Patients() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Patients</h2>

      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {["Name", "Email", "Gender", "Age"].map((col, idx) => (
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
                No patients found
              </td>
            </tr>
          ) : (
            sample.map(([name, email, gender, age], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-green-50 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap font-medium">{name}</td>
                <td className="px-6 py-4 text-blue-600 underline whitespace-nowrap">{email}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{gender}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
