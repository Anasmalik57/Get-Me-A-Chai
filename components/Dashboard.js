"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { fetchUser, updateProfile } from "@/actions/useractions";

const Dashboard = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (status === "authenticated") {
      getData();
    }
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [router, status]);

  const getData = async () => {
    let u = await fetchUser(session.user.name);
    setForm(u);
    // console.log(u);
  };

  const handleChange = (e) => {
    console.log("Changing:", e.target.name, "Value:", e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    update();
    let a = await updateProfile(e, form.username);
    alert("updated");
  };

  // ///////////////////////////// //
  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="w-16 h-16 border-8 border-slate-300 border-x-purple-500 border-y-slate-100 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#101828] text-white p-6">
      {/* Greeting Section */}
      <div className="bg-slate-900 rounded-xl p-6 shadow-lg mb-6">
        <h1 className="text-2xl font-bold">
          👋 Welcome, {session?.user.name}!
        </h1>
        <p className="text-gray-400 cursor-pointer">
          Manage your account & payment settings here.
        </p>
      </div>

      <form action={handleSubmit}>
        {/* User Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Profile Details */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-400 cursor-pointer">
                  Name
                </label>
                <input
                  value={form.name ? form.name : ""}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-400 cursor-pointer">
                  Email
                </label>
                <input
                  value={form.email ? form.email : ""}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="text-gray-400 cursor-pointer"
                >
                  Username
                </label>
                <input
                  value={form.username ? form.username : ""}
                  onChange={handleChange}
                  type="text"
                  name="username"
                  id="username"
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
                <label
                  htmlFor="profilepic"
                  className="text-gray-400 cursor-pointer"
                >
                  Profile Picture
                </label>
                <input
                  value={form.profilepic ? form.profilepic : ""}
                  onChange={handleChange}
                  type="text"
                  name="profilepic"
                  placeholder="Provide ProfilePic URL"
                  id="profilepic"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="coverpic"
                  className="text-gray-400 cursor-pointer"
                >
                  Cover Picture
                </label>
                <input
                  value={form.coverpic ? form.coverpic : ""}
                  onChange={handleChange}
                  type="text"
                  placeholder="Provide CoverPic URL"
                  name="coverpic"
                  id="coverpic"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Razorpay Credentials */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-4">
            💳 Razorpay Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="razorpayid"
                className="text-gray-400 cursor-pointer"
              >
                Razorpay ID
              </label>
              <input
                value={form.razorpayid ? form.razorpayid : ""}
                onChange={handleChange}
                type="password"
                name="razorpayid"
                id="razorpayid"
                placeholder="Enter Razorpay ID"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="razorpaysecret"
                className="text-gray-400 cursor-pointer"
              >
                Razorpay Secret
              </label>
              <input
                value={form.razorpaysecret ? form.razorpaysecret : ""}
                onChange={handleChange}
                type="password"
                name="razorpaysecret"
                id="razorpaysecret"
                placeholder="Enter Razorpay Secret"
                className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full cursor-pointer bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
