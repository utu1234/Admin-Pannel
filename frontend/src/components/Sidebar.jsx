import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaTags,
  FaCommentDots,
  FaGift,
  FaUndo,
  FaBox,
  FaStethoscope,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col">
      <h2 className="text-3xl font-extrabold mb-8 tracking-wide select-none">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-1 flex-grow">
        {/* Dashboard */}
        <Link
          to="/"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaTachometerAlt className="text-lg" />
          <span>Dashboard</span>
        </Link>

        {/* Doctors */}
        <Link
          to="/doctors"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/doctors")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaUserMd className="text-lg" />
          <span>Doctors</span>
        </Link>

        {/* Specialties - standalone link */}
        <Link
          to="/specialties"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/specialties")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaStethoscope className="text-lg" />
          <span>Specialties</span>
        </Link>

        {/* Patients */}
        <Link
          to="/patients"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/patients")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaUsers className="text-lg" />
          <span>Patients</span>
        </Link>

        {/* Appointments */}
        <Link
          to="/appointments"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/appointments")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaCalendarAlt className="text-lg" />
          <span>Appointments</span>
        </Link>

        {/* Products Dropdown */}
        <div className="mt-2">
          <button
            onClick={() => toggleMenu("products")}
            className={`flex items-center justify-between w-full px-4 py-2 rounded-md transition-colors duration-200
              ${
                openMenu === "products"
                  ? "bg-gray-700 border-l-4 border-blue-500 font-semibold text-blue-400"
                  : "hover:bg-gray-800 hover:text-blue-400"
              }`}
          >
            <span className="flex items-center gap-3">
              <FaBox className="text-lg" />
              Products
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                openMenu === "products" ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {openMenu === "products" && (
            <ul className="ml-8 mt-2 space-y-1">
              <li>
                <Link
                  to="/products/list"
                  className={`block px-4 py-2 rounded-md transition-colors duration-200
                    ${
                      isActive("/products/list")
                        ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                        : "hover:bg-gray-800 hover:text-blue-400"
                    }`}
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  to="/products/add"
                  className={`block px-4 py-2 rounded-md transition-colors duration-200
                    ${
                      isActive("/products/add")
                        ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                        : "hover:bg-gray-800 hover:text-blue-400"
                    }`}
                >
                  Add Product
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Remaining links after Products */}
        {[
          { to: "/coupons", label: "Coupons", icon: <FaTags /> },
          { to: "/referral-wallet", label: "Referral & Wallet", icon: <FaGift /> },
          { to: "/refunds", label: "Refunds", icon: <FaUndo /> },
        ].map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
              ${
                isActive(to)
                  ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                  : "hover:bg-gray-800 hover:text-blue-400"
              }`}
          >
            <span className="text-lg">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom fixed Concerns link */}
      <nav>
        <Link
          to="/concerns"
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200
            ${
              isActive("/concerns")
                ? "bg-gray-700 border-l-4 border-blue-500 font-semibold"
                : "hover:bg-gray-800 hover:text-blue-400"
            }`}
        >
          <FaCommentDots className="text-lg" />
          Concerns
        </Link>
      </nav>

      <div className="mt-6 text-xs text-gray-500 select-none px-4 py-3">
        &copy; 2025 Your Company
      </div>
    </div>
  );
};

export default Sidebar;
