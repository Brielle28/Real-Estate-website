import React from "react";
import { BsHouseCheck } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#4361EE40]  text-[#2B2B2B] px-[100px] gap-[100px]">
        <nav className="max-w-48">
          <div className="flex flex-row justify-center items-center gap-[5px] text-[20px] font-[Poppins]">
            <div className="bg-[#03AEFD] rounded-full w-[40px] h-[40px] items-center justify-center text-center">
              <BsHouseCheck className="m-0 mx-auto mt-2 text-white text-[24px]" />
            </div>
            <p> Rezilla </p>
          </div>
          <a className="link link-hover">
            <p className="text-[13px] font-[poppins] pt-2">
              {" "}
              2728 Hickory StreetSalt Lake City, UT 84104
            </p>
          </a>
          <a className="link link-hover">
            <div className="flex gap-3 item-center justify-center pt-5">
              <AiOutlinePhone className="text-black  w-[16px]" />
              <p className="text-black font-[Poppins] text-[13.3px]">
                +1 206-214-2298
              </p>
            </div>
          </a>
          <a className="link link-hover flex gap-3 item-center justify-center pt-4">
            <MdOutlineEmail className="text-black w-[16px] mt-1" />
            <p className="text-black font-[Poppins] text-[13.3px]">
              support@rezilla.com
            </p>
          </a>
        </nav>
        <nav className="max-w-48">
          <h6 className="footer-title">Quick links</h6>
          <a className="link link-hover text-[#2B2B2B]">Homes</a>
          <a className="link link-hover text-[#2B2B2B]">About </a>
          <a className="link link-hover text-[#2B2B2B]">Listings </a>
          <a className="link link-hover text-[#2B2B2B]">Services</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Become an agent</a>
        </nav>
        <nav className="max-w-48">
          <h6 className="footer-title">Discovery</h6>
          <a className="link link-hover">Canada</a>
          <a className="link link-hover">United states</a>
          <a className="link link-hover">Germany</a>
          <a className="link link-hover">Africa</a>
          <a className="link link-hover">India</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
            <div>
              <h4 className="label-text text-black font-normal ">Suscribe to our </h4>
              <p className="label-text pt-5 text-black font-normal "> Newsletter....!</p>
            </div>
            </label>
            <label className="input flex items-center gap-2 rounded-3xl bg-white shadow-lg shadow-white-900/90 -ml-1">
              <input type="text" className="grow " placeholder="Enter your email here" />
              <div className="bg-[#03AEFD] rounded-full w-[40px] h-[40px] items-center justify-center text-center">
              <BsArrowRight className="m-0 mx-auto mt-2 text-white text-[24px]" />
              </div>
            </label>
            <div className="flex flex-col ">
                <h4 className="font-[Poppins] text-black font-medium text-[19.4px] pt-3 pl-2"> Follow us on </h4>
                <div className="flex flex-row items-center mt-3 ml-3 text-[22px] text-[#03AEFD] gap-4">
                <BiLogoLinkedin />
                <FaFacebookF />
                <AiOutlineInstagram />
                </div>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
};

export default Footer;
