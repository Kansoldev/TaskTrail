"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header>
      <div className="container mx-auto mb-12 mt-5 p-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h1 className="text-[#283655] text-4xl font-bold">TaskTrail</h1>
          </div>

          <div className="search-container relative hidden lg:block">
            <Image
              src={"/search-icon.png"}
              width={20}
              height={20}
              className="absolute left-[14px] top-[14px]"
              alt=""
            />

            <input
              type="search"
              value={search}
              className="bg-[#fafafa] w-[500px] text-[#283655] p-3 pl-16"
              placeholder="Search for a task"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="hidden lg:block px-8 py-3 bg-sky-500 hover:bg-sky-400 transition-colors text-white font-semibold text-xl rounded-md">
            View History
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="12"
            className="lg:hidden mt-2"
          >
            <g fill="#000" fillRule="evenodd">
              <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
