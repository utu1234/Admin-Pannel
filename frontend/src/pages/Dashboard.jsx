import React from 'react';
import { FaUserMd, FaUsers, FaCalendarAlt, FaDollarSign, FaGift, FaUserPlus } from 'react-icons/fa';

const overviewCards = [
  { title: "Total Doctors", value: 128, icon: <FaUserMd className="text-white" />, bgGradient: "from-blue-500 to-blue-700" },
  { title: "Total Patients", value: 3452, icon: <FaUsers className="text-white" />, bgGradient: "from-green-500 to-green-700" },
  { title: "Appointments Today", value: 72, icon: <FaCalendarAlt className="text-white" />, bgGradient: "from-purple-500 to-purple-700" },
  { title: "Total Revenue", value: "44,48,900", icon: <FaDollarSign className="text-white" />, bgGradient: "from-yellow-400 to-yellow-600" },
  { title: "Pending Referrals", value: 15, icon: <FaUserPlus className="text-white" />, bgGradient: "from-pink-500 to-pink-700" },
  { title: "Active Coupons", value: 8, icon: <FaGift className="text-white" />, bgGradient: "from-indigo-500 to-indigo-700" },
];

const recentAppointments = [
  { patient: "Rohan Sharma", doctor: "Dr. Anil Kumar", time: "10:00 AM" },
  { patient: "Priya Singh", doctor: "Dr. Meera Patel", time: "11:00 AM" },
  { patient: "Sneha Gupta", doctor: "Dr. Rajesh Khanna", time: "01:00 PM" },
  { patient: "Amit Verma", doctor: "Dr. Meera Patel", time: "03:00 PM" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {overviewCards.map(({ title, value, icon, bgGradient }, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r ${bgGradient} transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="text-4xl">{icon}</div>
            <div>
              <div className="text-sm text-white opacity-80">{title}</div>
              <div className="text-3xl font-bold mt-1 text-white">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Appointments</h2>
        <ul className="divide-y divide-gray-200">
          {recentAppointments.map(({ patient, doctor, time }, idx) => (
            <li
              key={idx}
              className="py-3 flex justify-between items-center hover:bg-gray-50 rounded-md px-4 transition cursor-pointer"
            >
              <div>
                <div className="font-semibold text-gray-900">{patient}</div>
                <div className="text-sm text-gray-600">with {doctor}</div>
              </div>
              <div className="text-sm text-gray-500">{time}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-600 text-sm">
          Quick insights and summary cards to help you manage your admin panel efficiently.
          (Graphs and analytics coming soon!)
        </p>
      </div>
    </div>
  );
}
