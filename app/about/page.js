import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-6 md:p-16 text-gray-300 space-y-20">
      {/* 🔥 Header Section */}
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          About <span className="text-violet-400">GetMeAChai</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          The seamless way for creators to **monetize their audience** and **get
          support directly**.
        </p>
      </div>

      {/* 🔥 Overview Section */}
      {/* 🔥 Empowering Creators with Direct Support (Improved) */}
      <section className="max-w-5xl text-center space-y-12">
        <div
          className="relative bg-[#101828] p-8 md:p-12 rounded-xl shadow-lg transition-all 
    duration-300 hover:shadow-xl hover:bg-[#1A2238] cursor-pointer group"
        >
          {/* 🔥 Subtle Top Border Animation */}
          <div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 
      transition-all duration-300 scale-x-0 group-hover:scale-x-100"
          ></div>

          {/* Title */}
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Empowering Creators with Direct Support
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed">
            <strong>GetMeAChai</strong> helps{" "}
            <strong>artists, writers, developers, and influencers</strong>{" "}
            receive funding from their audience effortlessly. Whether it's a{" "}
            <strong>one-time donation</strong> or{" "}
            <strong>recurring support</strong>, your fans can back you up{" "}
            <strong>without hassle</strong>.
          </p>
        </div>
      </section>

      {/* 🔥 How It Works (Improved Cards) */}
      <section className="max-w-6xl space-y-12">
        <h2 className="text-3xl font-semibold text-center tracking-tight text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "📝",
              title: "Create an Account",
              desc: "Sign up & personalize your creator profile.",
            },
            {
              icon: "💳",
              title: "Connect Razorpay",
              desc: "Link Razorpay to accept seamless payments.",
            },
            {
              icon: "🚀",
              title: "Share & Earn",
              desc: "Share your page & receive direct support from fans.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center bg-[#101828] p-8 rounded-xl shadow-lg
        transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#1A2238] cursor-pointer 
        overflow-hidden group"
            >
              {/* Animated Top Border */}
              <div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600 
          transition-all duration-300 scale-x-0 group-hover:scale-x-100"
              ></div>

              {/* Icon */}
              <span className="text-5xl transition-all duration-300 group-hover:rotate-12">
                {step.icon}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mt-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-md text-center mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      
    {/* 🔥 Features Section (Enhanced with Hover Effects) */}
<section className="max-w-5xl text-center space-y-12">
  <h2 className="text-3xl font-semibold tracking-tight text-white">
    Why Choose GetMeAChai?
  </h2>

  {/* Feature Cards Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      { icon: "⚡", text: "Fast & Simple setup—No coding required." },
      { icon: "🔒", text: "Secure payments via Razorpay & UPI." },
      { icon: "💰", text: "Instant payouts, no hidden charges." },
      { icon: "📢", text: "Perfect for creators, developers & influencers." },
    ].map((item, index) => (
      <div
        key={index}
        className="relative flex items-center gap-5 bg-[#101828] p-6 rounded-xl shadow-md 
        transition-all duration-300 hover:bg-[#1A2238] hover:scale-105 hover:shadow-2xl cursor-pointer group"
      >
        {/* 🔥 Left Side Icon with Glow Effect on Hover */}
        <div
          className="text-4xl transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400"
        >
          {item.icon}
        </div>

        {/* 🔥 Text Content */}
        <p className="text-gray-300 text-lg font-medium transition-all duration-300">
          {item.text}
        </p>

        {/* 🔥 Animated Border Effect */}
        <div
          className="absolute inset-0 rounded-xl border border-transparent transition-all 
          duration-300 group-hover:border-indigo-500"
        ></div>
      </div>
    ))}
  </div>
</section>


      {/* 🔥 Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-400 text-lg">
          **Join 10,000+ creators** receiving support from their fans.
        </p>
        <Link href="/login" className="*:text-white cursor-pointer">
          <button
            className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600
            hover:to-indigo-700 transition-all duration-300 shadow-xl hover:scale-105"
          >
            Create Your Free Account
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
