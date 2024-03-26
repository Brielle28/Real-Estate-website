import React from "react";
import { BsHouseCheck } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar h-[80px] flex items-center mx-auto justify-center fixed w-full top-[4rem] z-50 bg-white">
        <div>
          <ul className="hidden lg:flex items-center justify-center gap-5 text-[16px] font-[Poppins] font-Poppings">
            <li className="bg-[#4361EE30] w-[80px] text-center rounded-3xl">
              <a href="#" className="">
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a href="#"> About </a>
            </li>
            <li>
              <a href="#"> Listings </a>
            </li>
            <li>
              <a href="#"> Service </a>
            </li>
            <li>
              <a href="#"> Blogs </a>
            </li>
          </ul>
          <div className="dropdown lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
        </div>
        
        <div className="flex flex-row justify-center items-center gap-[8px] text-[20px] font-[Poppins] ml-[129px]">
          <div className="bg-[#03AEFD] rounded-full w-[40px] h-[40px] items-center justify-center text-center">
            <BsHouseCheck className="m-0 mx-auto mt-2 text-white text-[24px]" />
          </div>
          <p> Rezilla </p>
        </div>
        <div className="flex flex-row ml-[224px] justify-center items-center gap-[10px] ">
          <div>
            <FaRegUserCircle className="w-[18px] h-[18px]"/>
          </div>
          <button className="text-[16px] font-[Poppins]"> Login/Register</button>
        </div>
        <div className="flex flex-row ml-[20px]">
            <button className="flex items-center justify-center gap-3 bg-[#03AEFD] w-[169px] h-[50px] rounded-3xl text-white"> 
            <BsHouseCheck />
            <p>Add Listing </p>
            </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
