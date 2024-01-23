import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Topnav = () => {
  const [query, setquery] = useState("");
  return (
    <>
      <div className="lg:w-full h-[4vh] lg:h-[10vh] w-[400px] left-[-55%] lg:left-0  relative flex items-center ml-32 pr-2">
        <i class="ri-menu-line  lg:text-3xl text-xl text-zinc-400 ml-2 lg:ml-0 lg:hidden mr-2"></i>
        <Nav />

        <i className="ri-search-line lg:text-3xl text-xl text-zinc-400 ml-6 lg:ml-0 "></i>
        <input
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="  w-[40%] text-white lg:w-[50%] ml-30 lg:m-10 lg:p-5 lg:text-xl text-sm outline-none border-none bg-transparent ml-2  lg:ml-0 mr-2"
          type="text"
          placeholder=" Search anything "
        />
        {query && (
          <i onClick={()=>setquery('')} class="ri-close-line lg:text-3xl text-xl  text-zinc-400 "></i>
        )}
        <div className=" absolute top-8 right-[80px]  lg:top-[105%] lg:left-8  lg:w-[50%] lg:max-h-[50vh] bg-zinc-200">
          {/* <Link className=" text-zinc-900 font-semibold hover:text-black hover:bg-zinc-400 duration-300  p-1 lg:p-3 rounded-lg w-[100%] flex justify-start items-center border-b-2 border-zinc-100 text-sm lg:text-xl">
            <img src="" alt="" />
            <span>Hellow Everyone</span>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Topnav;
