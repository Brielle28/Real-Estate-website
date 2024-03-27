import React from "react";
import { TbBed } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { BiDollar } from "react-icons/bi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IconBase } from "react-icons";

// creating an array of objects

let listedProperty = [
  {
    img: "/latest1.png",
    icon: <FaFireFlameCurved />,
    iconColor: "#FF1111",
    label: "Popular",
    amount: "5,970",
    desc1: "Tranquil heaven in the woods",
    desc2: "103 Wright Court, Burien WA 9816B",
    beds: "4 beds",
    baths: "3 baths",
    bgColor: "red-300"
  },
  {
    img: "/latest2.png",
    icon: <FaHouse />,
    iconColor: "#119BFF",
    label: "New Listing",
    amount: "1,970",
    desc1: "Serene Retreat by the Lake",
    desc2: "1964 Jehovah Drive, VA 22408",
    beds: "3 beds",
    baths: "2 baths",
    bgColor: "blue-300"
  },
  {
    img: "/latest3.png",
    icon: <FaDollarSign/>,
    iconColor: "#00CE34",
    label: "Discounted Price",
    amount: "3,450",
    desc1: "Charming Cottage in the Meadow",
    desc2: "1508 Centennial Farm RoadHarlan, 51537",
    beds: "4 beds",
    baths: "4 baths",
    bgColor: "green-300"
  },
  {
    img: "/latest1.png",
    icon: <FaFireFlameCurved />,
    iconColor: "#FF1111",
    label: "Popular",
    amount: "2,389",
    desc1: "Grand Estate on the Hilltop",
    desc2: "103 Wright Court, Burien WA 9816B",
    beds: "4 beds",
    baths: "3 baths",
    bgColor: "red-300"
  },
  
];


// creating props
const Cards = ({ img, icon, iconColor, label, amount, desc1, desc2, beds, baths, bgColor }) => {
  return (
    
      <div className="carousel-item flex flex-col items-start justify-center">
        <div
          className="w-[340px] h-[340px] bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <button className={`btn btn-xs sm:btn-sm md:btn-md h-[160px] w-[200px] rounded-3xl mt-[255px] ml-[30px] flex fex-row items-center justify-center bg-${bgColor} gap-[10px]`}>
            {React.cloneElement(icon, { className: `text-${iconColor} h-[19px] w-[15px]` })}
            <h5 className="font-[poppins] text-[16px] text-[#FF1111]">{label}</h5>
          </button>
        </div>
        <div className="flex flex-col items-start justify-center mt-[30px] gap-[10px]">
          <div className="flex flex-row">
            <BiDollar className="h-[35px] w-[35px] pt-2" />
            <h3 className="text-[27.6px] text-[#2B2B2B] font-[Poppins]">{amount}</h3>
          </div>
          <h4 className="font-[Poppins] text-[19.4px] text-[#1E1E1E]">{desc1}</h4>
          <p className="font-[Poppins] text-[16px] leading-6 text-[#64748B]">{desc2}</p>
          <div className="flex flex-row items-start justify-center gap-[10px]">
            <TbBed className="h-[43px] w-[30px] pb-[20px]" />
            <p className="font-[Poppins] text-[16px] text-[#2B2B2B]">{beds}</p>
            <LuBath className="h-[43px] w-[30px] pb-[20px]" />
            <p className="font-[Poppins] text-[16px] text-[#2B2B2B]">{baths}</p>
          </div>
        </div>
      </div>
    
  );
};


// mapping through the array 
const property = listedProperty.map(({ img, icon, iconColor, label, amount, desc1, desc2, beds, baths, bgColor }, idx) => (
  <Cards img={img} icon={icon} iconColor={iconColor} label={label} amount={amount} desc1={desc1} desc2={desc2} beds={beds} baths={baths} bgColor={bgColor} key={idx} />
));

const Section6 = () => {
  return (
    <>
    <div className="overflow-x-auto ml-[150px]">      
      <div className="carousel rounded-box   mt-[50px] gap-[20px]">
        {property}
      </div>
      </div>

    </>
  );
};
export default Section6;






