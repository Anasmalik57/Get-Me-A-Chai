"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { fetchUser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from "react-toastify";
import { Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      update();
    }, 3000);
    await updateProfile(e, form.username);
    toast.success("Profile Updated 🔥", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
    console.log(form.username);
  };

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-8 border-slate-300 border-x-purple-500 border-y-slate-100 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <div className="min-h-screen bg-[#101828] text-white p-4 sm:p-6 md:p-8 lg:p-12">
        {/* Greeting Section */}
        <div className="bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg mb-6 w-full max-w-3xl">
          <h1 className="text-xl sm:text-2xl font-bold">
            👋 Welcome, {session?.user.name}!
          </h1>
          <p className="text-gray-400 cursor-pointer text-sm sm:text-base">
            Manage your account & payment settings here.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-5xl">
          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Profile Details */}
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Profile Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-gray-400 cursor-pointer text-sm sm:text-base"
                  >
                    Name
                  </label>
                  <input
                    value={form.name || ""}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-400 cursor-pointer text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    value={form.email || ""}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="text-gray-400 cursor-pointer text-sm sm:text-base"
                  >
                    Username
                  </label>
                  <input
                    value={form.username || ""}
                    onChange={handleChange}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Username"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Profile & Cover Picture */}
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Profile & Cover
              </h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="profilepic"
                    className="text-gray-400 cursor-pointer text-sm sm:text-base"
                  >
                    Profile Picture
                  </label>
                  <input
                    value={form.profilepic || ""}
                    onChange={handleChange}
                    type="text"
                    name="profilepic"
                    placeholder="Provide ProfilePic URL"
                    id="profilepic"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="coverpic"
                    className="text-gray-400 cursor-pointer text-sm sm:text-base"
                  >
                    Cover Picture
                  </label>
                  <input
                    value={form.coverpic || ""}
                    onChange={handleChange}
                    type="text"
                    placeholder="Provide CoverPic URL"
                    name="coverpic"
                    id="coverpic"
                    className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Razorpay Credentials */}
          <div className="bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg mt-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              💳 Razorpay Credentials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="razorpayid"
                  className="text-gray-400 cursor-pointer text-sm sm:text-base"
                >
                  Razorpay ID
                </label>
                <input
                  value={form.razorpayid || ""}
                  onChange={handleChange}
                  type="password"
                  name="razorpayid"
                  id="razorpayid"
                  placeholder="Enter Razorpay ID"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="razorpaysecret"
                  className="text-gray-400 cursor-pointer text-sm sm:text-base"
                >
                  Razorpay Secret
                </label>
                <input
                  value={form.razorpaysecret || ""}
                  onChange={handleChange}
                  type="password"
                  name="razorpaysecret"
                  id="razorpaysecret"
                  placeholder="Enter Razorpay Secret"
                  className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white outline-none text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full cursor-pointer bg-violet-500 hover:bg-violet-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
