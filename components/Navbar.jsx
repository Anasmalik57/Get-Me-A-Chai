import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center p-4 px-10 shadow-md">
      <Link href={"/"}>
        <div className="logo font-bold text-2xl tracking-wider flex items-center gap-[2px]">
          <img src="/chai.gif" className="w-12" alt="chai" />
          <span className="pt-2">Getmeachai!</span>
        </div>
      </Link>
      {/* <ul className="flex justify-between items-center gap-4">
        <li id="1">Home</li>
        <li id="2">About</li>
        <li id="3">Projects</li>
        <li id="4">Sign Up</li>
        <li id="5">Login</li>
      </ul> */}

      <div className="flex space-x-4">
        <Link href={"/login"}>
          <button className="cursor-pointer px-7 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0px_0px_10px_#3b82f6] hover:shadow-[0px_0px_20px_#3b82f6] transition-all duration-300">
            Login
          </button>
        </Link>
        {/* <button className="cursor-pointer px-7 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white border border-gray-600 shadow-md hover:bg-gray-700 transition-all duration-300">
    Signup
  </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
