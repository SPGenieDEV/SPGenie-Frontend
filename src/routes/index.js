import React from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";


const Routes= ({ children }) => {
  return (
    <div className="flex w-full overflow-x-hidden">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="min-h-screen py-10 mt-10 bg-gray-100 px-7">{children}</div>
      </div>
    </div>
  );
};

export default Routes;
