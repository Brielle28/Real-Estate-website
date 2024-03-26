import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="flex flex-row mt-[130px] mx-40 gap-[294px]">
        <div>
          <h5 className="font-[Popins] text-[19.4px] leading-7 font-medium text-[#4361EE] ">
            CHECKOUT OUR NEW
          </h5>
          <h2 className="pt-[5px] text-[30px] leading-[47px] text-[#2B2B2B] font-[Poppins]">
            Latest Listed Properties
          </h2>
          <p className="pt-[5px] text-[13px] font-[Poppins] leading-6 text-[#64748B]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex flex-row gap-[25px]">
          <button className="w-[88px] h-[49px] rounded-[30px] mt-[50px] border-solid border-2 text-[#03AEFD] border-[#03AEFD] ">
            <h5>All</h5>
          </button>
          <button className="w-[88px] h-[49px] rounded-[30px] mt-12 text-[white] bg-[#03AEFD]">
            <h5>Sell</h5>
          </button>
          <button className="w-[88px] h-[49px] rounded-[30px] mt-[50px] border-solid border-2 text-[#03AEFD] border-[#03AEFD]">
            <h5>Rent</h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default Section4;
