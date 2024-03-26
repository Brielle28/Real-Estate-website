import React from "react";
import Section1Writeup from "./Section1Writeup";
import Form from "./Form";
import Button from "./Button";
import Carosel from "./Carosel";

const Section1 = () => {
  return (
    <>
      <div className="flex mt-[0px] flex-row bg-gradient-to-b from-[#4361EE00] z-0 to-[#4361EE70] pt-[90px] pb-28 rounded-br-lg-54">
        <div className="flex flex-row items-center justify-around mx-[80px] mt-10 mr-[100px] gap-[100px]">
          <div>
            <Section1Writeup />
            <Carosel />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      {/* <Button/> */}
    </>
  );
};

export default Section1;
