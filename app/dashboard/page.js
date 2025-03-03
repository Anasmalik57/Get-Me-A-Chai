"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiHome, FiUsers, FiDollarSign, FiBell, FiSettings } from "react-icons/fi";

const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    const router = useRouter();
    router.push("/");
  }
  return (
    <div className="flex h-screen bg-[#0a0f1a] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121826] text-white p-6 flex flex-col gap-6 shadow-lg">
        <h1 className="text-2xl font-bold flex items-center gap-2">☕ Getmeachai!</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#1e293b]">
            <FiHome /> Home
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#1e293b]">
            <FiUsers /> Users
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#1e293b]">
            <FiDollarSign /> Earnings
          </a>
          <a href="#" className="flex items-center gap-2 p-3 rounded-lg hover:bg-[#1e293b]">
            <FiSettings /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex justify-between items-center bg-[#121826] p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-1/3 border border-gray-600 rounded-lg bg-[#1e293b] text-white focus:outline-none"
          />
          <div className="flex items-center gap-4">
            <FiBell className="text-xl cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[#121826] p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-700">
            <FiUsers className="text-3xl text-blue-400" />
            <div>
              <h2 className="text-xl font-bold">1,234</h2>
              <p className="text-gray-400">Total Users</p>
            </div>
          </div>
          <div className="bg-[#121826] p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-700">
            <FiDollarSign className="text-3xl text-green-400" />
            <div>
              <h2 className="text-xl font-bold">$12,345</h2>
              <p className="text-gray-400">Total Earnings</p>
            </div>
          </div>
          <div className="bg-[#121826] p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-700">
            <FiBell className="text-3xl text-yellow-400" />
            <div>
              <h2 className="text-xl font-bold">5</h2>
              <p className="text-gray-400">New Notifications</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
// 1:20:00
