import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-slate-700 border-b shadow-sm">
      <div className="flex items-center gap-5">
        <button
          className="p-2 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white text-white"
          aria-label="Menu"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-white select-none">Admin Panel</h1>
        <div className="ml-4 text-sm text-white select-none">
          Manage doctors, patients, referrals & wallet
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden sm:block">
          <input
            type="search"
            className="w-64 px-4 py-2 border border-blue-600 rounded-md bg-white text-black placeholder-black/50
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            className="px-4 py-2 rounded-md bg-white text-blue-800 font-medium hover:bg-gray-100 transition-colors duration-200"
            aria-label="Help"
          >
            Help
          </button>
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-500
                       flex items-center justify-center text-white font-semibold select-none"
            title="User Avatar"
          >
            A
          </div>
        </div>
      </div>
    </header>
  );
}
