import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
const Form = () => {
  return (
    <>
      <div className="z-9999 w-[420px] mt-10 ml-10 rounded-3xl bg-white shadow-lg shadow-white-900/90 flex flex-col items-center justify-center">
        <div className="flex flex-row gap-[125px] pt-5 border-b-2 pb-5">
          <a href="#" className="text-[#03AEFD] font-[16px] font-[Poppins]">
            {" "}
            For Sale{" "}
          </a>
          <a href="#" className="text-[#1E1E1E] font-[16px] font-[Poppins]">
            {" "}
            For Rent{" "}
          </a>
        </div>
        <input
          type="text"
          placeholder="New York, San Francisco, etc"
          className="input font-[Poppins] text-[16px] bg-[#D4D4D4] mt-12 rounded-3xl font-normal px-10 "
        />
        <div
          action="#"
          className="flex w-[282px] h-[48px] bg-[#D4D4D4] items-center justify-center  mt-12 rounded-3xl font-normal px-10 "
        >
          <select
            id="dropdown"
            name="dropdown"
            className="mt-2 bg-transparent font-[Poppins] text-[16px] text-[#6D6A7550]"
          >
            <option value="option1">Select Property Type</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div
          action="#"
          className="flex w-[282px] h-[48px] bg-[#D4D4D4] items-center justify-center  mt-12 rounded-3xl font-normal px-10 "
        >
          <select
            id="dropdown"
            name="dropdown"
            className="mt-2 bg-transparent font-[Poppins] text-[16px] text-[#2c263b50]"
          >
            <option value="option1">Select Property Type</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </select>
        </div>
        <div className="flex mt-[20px] ml-[10px]  items-center text-left justify-center gap-3">
        <MdOutlineSettingsInputComponent className="text-[#03AEFD] font-[14px] -ml-[150px] " />
        <p className="text-[#03AEFD] text-[13.3px] "> Advance Search </p>
        </div>
        <div className="flex flex-row w-[282px] mb-[60px] gap-2 h-[50px] bg-[#03AEFD] items-center justify-center  mt-12 rounded-3xl font-normal px-10 ">
          <BsSearch className="h-[25px] w-6 text-white pt-2" />
          <button className=" mt-2 bg-transparent font-[Poppins] text-[16px] text-white ">
            {" "}
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
