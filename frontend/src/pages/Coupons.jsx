import React from 'react';

const sample = [
  ['WELCOME10', '10% off on first order', 'Active'],
  ['FEST50', '50% off during festival', 'Expired'],
  ['SUMMER20', '20% off on summer collection', 'Active'],
  ['BLACKFRIDAY', '70% off - Black Friday deal', 'Expired'],
  ['FREESHIP', 'Free shipping on orders above 5000', 'Active'],
  ['NEWUSER5', '500 off for new users', 'Active'],
];

const statusStyles = {
  Active: 'text-green-900 bg-green-300',
  Expired: 'text-red-900 bg-red-300',
};

const cardBgColors = [
  'from-purple-400 via-pink-500 to-red-500',
  'from-blue-400 via-teal-500 to-green-500',
  'from-yellow-400 via-orange-400 to-red-400',
  'from-pink-400 via-purple-500 to-indigo-500',
  'from-green-400 via-lime-500 to-yellow-400',
  'from-cyan-400 via-blue-500 to-purple-500',
];

export default function Coupons() {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Coupons</h2>

      {/* Colorful Coupon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {sample.map(([code, offer, status], idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-lg text-white bg-gradient-to-r ${cardBgColors[idx % cardBgColors.length]} relative overflow-hidden`}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-extrabold tracking-wide drop-shadow-lg">{code}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[status] || ''} bg-opacity-90 drop-shadow`}
              >
                {status}
              </span>
            </div>
            <p className="text-lg drop-shadow-md">{offer}</p>

            {/* Decorative circle */}
            <div
              className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-30 filter blur-3xl"
              style={{ background: 'rgba(255 255 255 / 0.2)' }}
            ></div>
          </div>
        ))}
      </div>

      {/* Coupons Table */}
      <table className="min-w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {['Code', 'Offer', 'Status'].map((col, idx) => (
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
              <td colSpan={3} className="px-6 py-8 text-center text-gray-400 italic">
                No coupons available
              </td>
            </tr>
          ) : (
            sample.map(([code, offer, status], idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-green-50 transition-colors cursor-pointer`}
              >
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap font-mono font-semibold">
                  {code}
                </td>
                <td className="px-6 py-4 text-gray-700 whitespace-normal max-w-lg">
                  {offer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full font-semibold ${
                      status === 'Active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
