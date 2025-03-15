import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer 
      className="bg-slate-900 text-white border-t border-slate-700/50"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xs md:text-base text-slate-300">
            Copyright &copy; {year} - All rights reserved
          </p>
          <p className="text-xs md:text-sm text-slate-400">
            Crafted with <span className="animate-pulse scale-110">❤️</span> by developers for developers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;