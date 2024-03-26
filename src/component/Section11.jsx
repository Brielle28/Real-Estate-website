import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const Section11 = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-[175px] mt-[217px] mx-[]">
        <div className="flex flex-col max-w-[350px] mt-[30px] gap-[15px]">
          <h6 className="fon-[Poppins] text-[19.4px] text-[#4361EE]">
            {" "}
            TESTIMONIALS{" "}
          </h6>
          <h2 className="font-[Poppins] text-[39.8px] leading-10 text-[#2B2B2B]">
            {" "}
            look what our customers say!
          </h2>
          <p className="font-[Poppins] text-[16px] leading-6 text-[#2B2B2B]">
            {" "}
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <div className="flex gap-[50px] pt-[65px] px-[20px]">
            <div className="bg-white border border-[#4361EE]  rounded-full w-[40px] h-[40px] items-center justify-center text-center">
              <BsArrowLeft className="m-0 mx-auto mt-2 text-[#4361EE] text-[24px]" />
            </div>
            <div className="bg-white border border-[#4361EE] rounded-full w-[40px] h-[40px] items-center justify-center text-center">
              <BsArrowRight className="m-0 mx-auto mt-2 text-[#4361EE]  text-[24px]" />
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl z-30">
          <div class="card-body border-b-4 border-#D4D4D4 ">
            <h4 className="font-[19.4px] font-[Poppins] text-[#2B2B2B] leading-7 pt-[40px]">
              I highly recommend Jodi J. Appleby. She was attentive to our needs
              and worked tirelessly to find us the perfect home. We couldn't be
              happier with our new place!
            </h4>
          </div>
          <div class="card-actions flex flex-row items-center justify-center mt-[20px] mb-5">
            <img src="/woman.png" alt="customers" className="" />
            <h4 className="pl-[15px] font-[Poppins] font-[19.4px] leading-7 text-[#2B2B2B]">
              {" "}
              Barbara D. Smith{" "}
            </h4>
            <img src="/star.png" alt="ratings" className="pl-[83px]" />
          </div>
        </div>
        <div className="h-[60px] w-[60px] rounded-full absolute -mt-[300px] bg-gradient-to-b from-[#4361EE] to-[#4361EE00]  ml-[160px] -rotate-45"></div>
      </div>
      <img
        src="/quote.png"
        alt=""
        className="absolute -mt-[288px] ml-[740px] z-40"
      />
    </>
  );
};

export default Section11;
