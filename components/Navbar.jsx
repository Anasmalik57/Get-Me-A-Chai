"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center p-4 px-10 shadow-md">
      <Link href={"/"}>
        <div className="logo font-bold text-2xl tracking-wider text-white flex items-center gap-[2px]">
          <img src="/chai.gif" className="w-12" alt="chai" />
          <span className="pt-2">Getmeachai!</span>
        </div>
      </Link>

      <div className="relative">
        {session ? (
          <div className="flex items-center gap-3">
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer px-5 py-2 text-sm font-semibold tracking-wide rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300  hover:-translate-y-0.5 hover:shadow-[0_0_12px_#1E2939] shadow-[0_0_2px_#6b7280]"
              >
                {session.user.name || "User"}
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg overflow-hidden">
                  <Link href="/profile" className="block px-5 py-2 text-sm hover:bg-gray-700 transition">Profile</Link>
                  <Link href="/settings" className="block px-5 py-2 text-sm hover:bg-gray-700 transition">Settings</Link>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left px-5 py-2 text-sm hover:bg-red-600 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>

            {/* Dashboard Button */}
            <Link href={"/dashboard"}>
              <button className="px-5 py-2 text-sm cursor-pointer font-semibold tracking-wide rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] hover:-translate-y-0.5 transition-all duration-300">
                Dashboard
              </button>
            </Link>

            {/* Logout Button */}
            <button
              onClick={() => signOut()}
              className="px-5 py-2 text-sm cursor-pointer font-semibold tracking-wide rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_0_8px_#ef4444] hover:shadow-[0_0_12px_#ef4444] hover:-translate-y-0.5 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          // Login Button
          <Link href={"/login"}>
            <button className="px-5 py-2 text-sm cursor-pointer font-semibold tracking-wide rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] hover:-translate-y-0.5 transition-all duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
