import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar with subtle shadow */}
      <aside className="shadow-lg">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1 bg-white shadow-inner rounded-tl-2xl">
        {/* Navbar with bottom border and shadow */}
        <header className="sticky top-0 z-20 bg-white shadow-sm border-b border-gray-200">
          <Navbar />
        </header>

        {/* Main content area */}
        <main className="p-8 flex-1 overflow-auto max-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
