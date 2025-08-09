import React from 'react';
import Table from '../components/Table';

const sample = [
  ['Paracetamol', '500 mg', '₹50', 'In stock', 'https://cdn-icons-png.flaticon.com/128/2933/2933763.png'],
  ['Cough Syrup', '100 ml', '₹120', 'Low stock', 'https://cdn-icons-png.flaticon.com/128/3534/3534116.png'],
  ['Ibuprofen', '200 mg', '₹75', 'In stock', 'https://cdn-icons-png.flaticon.com/128/890/890395.png'],
  ['Vitamin C', '1000 mg', '₹90', 'Out of stock', 'https://cdn-icons-png.flaticon.com/128/3534/3534105.png'],
  ['Antacid', '10 tablets', '₹40', 'In stock', 'https://cdn-icons-png.flaticon.com/128/2965/2965567.png'],
  ['Azithromycin', '250 mg', '₹150', 'Low stock', 'https://cdn-icons-png.flaticon.com/128/3032/3032204.png'],
];

const statusStyles = {
  'In stock': 'text-green-600 font-semibold',
  'Low stock': 'text-yellow-600 font-semibold',
  'Out of stock': 'text-red-600 font-semibold',
};

export default function ProductList() {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Products</h2>

      <div className="mb-6">
        <a
          href="/products/add"
          className="inline-block px-5 py-3 bg-accent text-white rounded-md font-semibold shadow hover:bg-accent-dark transition"
        >
          Add Product
        </a>
      </div>

      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700 tracking-wide">Image</th>
            {["Name", "Dose", "Price", "Status"].map((col, idx) => (
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
                colSpan={5}
                className="px-6 py-8 text-center text-gray-400 italic"
              >
                No products found
              </td>
            </tr>
          ) : (
            sample.map(([name, dose, price, status, img], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors cursor-pointer`}
              >
                <td className="px-4 py-2">
                  <img
                    src={img}
                    alt={name}
                    className="h-10 w-10 object-contain rounded-md"
                    loading="lazy"
                  />
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap font-medium">{name}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{dose}</td>
                <td className="px-6 py-4 text-gray-700 whitespace-nowrap">{price}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${statusStyles[status] || ''}`}>{status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
