"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (!session) {
      router.push("/login"); // Redirect to login page if not logged in
    }
  }, [router, session]);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#101828] text-white p-6">
      {/* Greeting Section */}
      <div className="bg-slate-900 rounded-xl p-6 shadow-lg mb-6">
        <h1 className="text-2xl font-bold">👋 Welcome, Mohd Anas!</h1>
        <p className="text-gray-400">
          Manage your account & payment settings here.
        </p>
      </div>

      {/* User Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Profile Details */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Profile & Cover Picture */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Profile & Cover</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400">Profile Picture</label>
              <input
                type="file"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
            <div>
              <label className="text-gray-400">Cover Picture</label>
              <input
                type="file"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Razorpay Credentials */}
      <div className="bg-slate-900 rounded-xl p-6 shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">💳 Razorpay Credentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-400">API Key</label>
            <input
              type="text"
              placeholder="Enter API Key"
              className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
            />
          </div>
          <div>
            <label className="text-gray-400">Secret Key</label>
            <input
              type="text"
              placeholder="Enter Secret Key"
              className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
            />
          </div>
        </div>
        <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
