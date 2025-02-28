import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white flex justify-center items-center p-4 shadow-md capitalize">
      Copyright &copy; Get-me-a-chai | All rights reserved {year}
    </footer>
  );
};

export default Footer;
