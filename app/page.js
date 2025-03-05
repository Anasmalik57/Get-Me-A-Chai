import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className=" w-full  min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[40vh] p-6 gap-4 text-center">
        <h1 className="text-5xl font-extrabold flex items-center gap-3">
          Buy Me a Chai
          <span className="drop-shadow-[0_0_15px_rgba(150,114,230)]">
            <Image width={24} height={24} src="/chai.gif" className="w-24" alt="chai" />
          </span>
        </h1>
        <p className="tracking-wide capitalize max-w-xl text-gray-300 text-lg">
          A crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div className="flex gap-6">
          <button className="cursor-pointer px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-xl shadow-blue-500/40 focus:ring-4 focus:ring-blue-400 focus:outline-none">
            Start Now
          </button>
          <button className="cursor-pointer px-8 py-3 text-lg font-semibold rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all duration-300 shadow-lg focus:ring-4 focus:ring-gray-500 focus:outline-none">
            Read More
          </button>
        </div>
      </div>

      {/* Separator */}
      <div className="h-1  bg-white opacity-15 w-full mb-0"></div>

      {/* Info Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold capitalize mb-10">
          Your Fans Can Buy You a Chai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8">
          {[
            { img: "/vlogger.gif", text: "Your Fans want to help" },
            { img: "/rupee.gif", text: "Get support from your community" },
            { img: "/group.gif", text: "Grow your audience" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <Image width={24} height={24}
                src={item.img}
                className="w-24 bg-slate-600 rounded-full p-4"
                alt="icon"
              />
              <p className="text-gray-300 font-semibold text-lg">{item.text}</p>
              <p className="text-center text-gray-400 text-sm">
                Your fans are here to support you.
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Separator */}
      <div className="h-1  bg-white opacity-15 w-full mb-0"></div>

      {/* Info Section */}
      <div className="container mx-auto py-12 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold capitalize mb-10">
          Learn More About Us!
        </h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4kCx1R_V8A0?si=SWdwMsBalufEjxkP" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Page;
