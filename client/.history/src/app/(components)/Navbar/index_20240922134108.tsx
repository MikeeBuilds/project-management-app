import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black ">
      {/* Search Bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
            <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translte-y-1/2 transform cursor-pointer dark:text-white"/>
            <input className="w-full rounded-md border border-gray-300 bg-white px-10 py-2 pl-12 text-sm text-gray-900 focus:outline-none dark:border-gray-700 dark:bg-black dark:text-white"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
