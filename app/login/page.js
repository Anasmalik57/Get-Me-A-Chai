"use client";
import React, { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    document.title = "Login - Get Me A Chai";
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]); // session change hote hi redirect karega
  return (
    <div className="container mx-auto">
      {/* Page heading */}
      <h1 className="capitalize text-center text-4xl py-6 font-bold tracking-wide ">
        Login to Get Started
      </h1>

      {/* Login buttons section */}
      <div className="flex flex-col gap-4 min-h-screen items-center peer">
        {/* Google Login Button */}
        <button className="cursor-pointer flex items-center justify-center w-full md:w-60 bg-white border border-gray-300 rounded-xl shadow-md py-3 text-base font-medium text-gray-800 hover:bg-gray-300 transition-all duration-300 focus:outline-2 focus:outline-offset-2 active:scale-105">
          <img src={"/google.svg"} alt="Google Logo" className="h-6 w-6 mr-3" />
          <span>Continue with Google</span>
        </button>

        {/* LinkedIn Login Button */}
        <button className="cursor-pointer flex items-center justify-center w-full md:w-60 bg-white border border-gray-300 rounded-xl shadow-md py-3 text-base font-medium text-gray-800 hover:bg-gray-300 transition-all duration-300 focus:outline-2 focus:outline-offset-2 active:scale-105">
          <img
            src={"/linkedin.svg"}
            alt="LinkedIn Logo"
            className="h-6 w-6 mr-3"
          />
          <span>Continue with LinkedIn</span>
        </button>

        {/* GitHub Login Button */}
        <button
          onClick={() => {
            signIn("github");
          }}
          className="cursor-pointer flex items-center justify-center w-full md:w-60 bg-white border border-gray-300 rounded-xl shadow-md py-3 text-base font-medium text-gray-800 hover:bg-gray-300 transition-all duration-300 focus:outline-2 focus:outline-offset-2 active:scale-105"
        >
          <img src={"/github.svg"} alt="GitHub Logo" className="h-6 w-6 mr-3" />
          <span>Continue with GitHub</span>
        </button>

        {/* Twitter Login Button */}
        <button className="cursor-pointer flex items-center justify-center w-full md:w-60 bg-white border border-gray-300 rounded-xl shadow-md py-3 text-base font-medium text-gray-800 hover:bg-gray-300 transition-all duration-300 focus:outline-2 focus:outline-offset-2 active:scale-105">
          <img src={"/x.svg"} alt="Twitter Logo" className="h-6 w-6 mr-3" />
          <span>Continue with Twitter</span>
        </button>
        {/* Facebook Login Button */}
        <button className="cursor-pointer flex items-center justify-center w-full md:w-60 bg-white border border-gray-300 rounded-xl shadow-md py-3 text-base font-medium text-gray-800 hover:bg-gray-300 transition-all duration-300 focus:outline-2 focus:outline-offset-2 active:scale-105">
          <img
            src={"/facebook.svg"}
            alt="Facebook Logo"
            className="h-6 w-6 mr-3"
          />
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
