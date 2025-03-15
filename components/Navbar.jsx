"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center p-4 px-4 sm:px-6 md:px-8 lg:px-10 shadow-md">
      <Link href={"/"}>
        <div className="logo font-bold text-xl md:text-2xl tracking-wider text-white flex items-center gap-1">
          <img src="/chai.gif" className="w-8 md:w-12" alt="chai" />
          <span className="pt-1 md:pt-2">Getmeachai!</span>
        </div>
      </Link>

      <div className="relative">
        {session ? (
          <div className="flex items-center gap-2 md:gap-3">
            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)} 
                onBlur={() => setTimeout(() => setShowDropdown(false), 300)} 
                className="cursor-pointer flex gap-1 items-center justify-center px-3 md:px-5 py-1.5 md:py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="truncate max-w-[120px] md:max-w-none">
                  {session.user.email}
                </span>
                <FaAngleDown className="text-sm md:text-base" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 z-50 mt-2 w-48 md:w-56 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden *:cursor-pointer *:transition-all *:duration-100 *:ease-in">
                  <Link href={"/dashboard"}>
                    <div className="text-white px-4 md:px-5 py-2 md:py-2.5 text-sm hover:bg-gray-700">
                      Dashboard
                    </div>
                  </Link>
                  <Link href={`/${session.user.name}`}>
                    <div className="text-white px-4 md:px-5 py-2 md:py-2.5 text-sm hover:bg-gray-700">
                      Your Page
                    </div>
                  </Link>
                  <button 
                    onClick={() => signOut()} 
                    className="w-full text-left px-4 md:px-5 py-2 md:py-2.5 text-sm hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>

            {/* Logout Button - Hidden on mobile */}
            <button 
              onClick={() => signOut()} 
              className="hidden sm:inline-block px-3 md:px-5 py-1.5 md:py-2 text-xs sm:text-sm cursor-pointer font-semibold tracking-wide rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_0_8px_#ef4444] hover:shadow-[0_0_12px_#ef4444] hover:-translate-y-0.5 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href={"/login"}>
            <button className="px-3 md:px-5 py-1.5 md:py-2 text-xs sm:text-sm cursor-pointer font-semibold tracking-wide rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] hover:-translate-y-0.5 transition-all duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;