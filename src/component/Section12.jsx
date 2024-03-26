import React from "react";

const Section12 = () => {
  return (
    <>
      <div className='h-[60px] w-[60px] rounded-full absolute mt-[220px] bg-gradient-to-b from-[#FFFFF100] to-[#FFFFF0] ml-[1070px] -rotate-45'></div> 
      <div className='h-[60px] w-[60px] rounded-full absolute mt-[350px] bg-gradient-to-b from-[#FFFFF100] to-[#FFFFF0] ml-[350px] -rotate-45'></div> 
      <div className="flex flex-row w-[1100px] ml-[100px] mt-[250px] mb-[180px] h-[247px] left-[120px] rounded-[40px] bg-[#03AEFD] items-center justify-end gap-[85px] pr-[188px]">
        <div>
            <img src="/man.png" alt="agent" className="absolute -mt-[180px] -ml-[330px]" />
        </div>
        <div className="flex flex-col ">
          <h2 className="font-[Poppins] text-[39.8px] leading-10 text-white">
            Become a Agent{" "}
          </h2>
          <p className="font-[16px] font-[Poppins] leading-6 text-white pt-3">
            Fusce venenatis tellus a felis scelerisque. <br></br> venenatis tellus a felis
            scelerisque.
          </p>
        </div>
        <div className="flex items-center mt-7">
          <button className="flex items-center justify-center w-[165x] h-[49px] rounded-3xl pt-4 px-8 bg-white text-center">
            <h5 className="text-[#03AEFD] font-[16px] font-[Poppins] pb-3">
              Register Now{" "}
            </h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default Section12;
