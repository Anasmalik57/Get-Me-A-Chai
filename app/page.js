import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 md:py-24 gap-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold flex flex-col md:flex-row items-center gap-3">
          Buy Me a Chai
          <span className="drop-shadow-[0_0_15px_rgba(150,114,230)]">
            <img src="/chai.gif" className="w-20 md:w-24" alt="chai" />
          </span>
        </h1>
        <p className="tracking-wide capitalize max-w-xl text-gray-300 text-base md:text-lg">
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 **:text-white w-full sm:w-auto">
          <Link href={"/login"} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto cursor-pointer px-6 py-3 text-sm md:px-8 md:py-3 md:text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-xl shadow-blue-500/40 focus:ring-4 focus:ring-blue-400 focus:outline-none">
              Start Now
            </button>
          </Link>
          <Link href={"/about"} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto cursor-pointer px-6 py-3 text-sm md:px-8 md:py-3 md:text-lg font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg focus:ring-4 focus:ring-gray-500 focus:outline-none">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-white opacity-15 w-full max-w-7xl mx-auto mb-0"></div>

      {/* Info Section */}
      <div className="w-full px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold capitalize mb-8 md:mb-10">
          Your Fans Can Buy You a Chai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {[
            { img: "/vlogger.gif", text: "Your Fans want to help" },
            { img: "/rupee.gif", text: "Get support from your community" },
            { img: "/group.gif", text: "Grow your audience" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 bg-gray-800 p-4 md:p-6 py-6 md:py-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-gray-700"
            >
              <img
                src={item.img}
                className="w-20 md:w-24 bg-slate-600 rounded-full p-3 md:p-4"
                alt="icon"
              />
              <p className="text-gray-300 font-semibold text-base md:text-lg">
                {item.text}
              </p>
              <p className="text-center text-gray-400 text-sm">
                Your fans are here to support you.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-white opacity-15 w-full max-w-7xl mx-auto mb-0"></div>

      {/* Video Section */}
      <div className="w-full px-4 sm:px-6 py-12 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold capitalize mb-8 md:mb-10">
          Learn More About Us!
        </h2>
        <div className="w-full max-w-4xl px-4 sm:px-0 aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/yxdnuhmhEeA?si=OwRsjc8LJ8kWrPeJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;