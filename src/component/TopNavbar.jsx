import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const TopNavbar = () => {
  return (
    <>
      <div className="navbar bg-[#03AEFD] h-[40px] w-[100%] z-50 top-0  mx-auto sticky ">
        <div className="flex-1 gap-3 ">
          <CiLocationOn className="w-[15px] text-white ml-[100px]" />
          <p className="text-white text-[13.3px]">
            Rezilla, 18 Grattan St, Brooklyn
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex gap-3 item-center justify-center px-5">
            <AiOutlinePhone className="text-white w-[16px]" />
            <p className="text-white font-[Poppins] text-[13.3px]">
              +1 206-214-2298
            </p>
          </div>
          <div className="flex gap-3 item-center justify-center">
            <MdOutlineEmail className="text-white w-[16px]" />
            <p className="text-white font-[Poppins] text-[13.3px] mr-[100px]">
              support@rezilla.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
