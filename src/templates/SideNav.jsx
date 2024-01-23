import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const SideNav = () => {


  

  return (
    <div className="lg:w-[20%] w-[45%]  border-r-2 border-zinc-400 lg:p-10 p-4 hidden lg:block  ">
      <Nav />
      <nav className="flex flex-col text-zinc-400 text-xl gap-2 ">
        <h1 className="text-white font-semibold lg:text-xl mt-8 mb-3">
          New Feed{" "}
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-team-fill"></i> People
        </Link>
      </nav>

      <hr className="h-[1px] bg-zinc-50 mt-3 " />

      <nav className="flex flex-col text-zinc-400 text-xl gap-2 ">
        <h1 className="text-white font-semibold lg:text-xl mt-8 mb-3">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-information-fill"></i> About us
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white lg:duration-200  duration-0  rounded-lg px-3  py-2">
          <i class="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
