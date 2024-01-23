import React from "react";
import SideNav from "../templates/SideNav";
import Topnav from "../templates/Topnav";

const Home = () => {
  document.title = "sasthaFlix | Home";
  return (
    <>
      <SideNav />
      <div className="w-[55%] lg:w-[80%] h-full ">
      <Topnav  />
      </div>
    </>
  );
};

export default Home;
