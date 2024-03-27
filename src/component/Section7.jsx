import React from "react";


// Array
let List =[
    {
        img: "/search.png",
        title: "Buy a New Home",
        desc: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    },
    {
        img: "/home.png",
        title: "Sell a House",
        desc: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    },
    {
        img: "/bed.png",
        title: "Rent a House",
        desc: "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus.",
    }

]

//  props

const Card = ({ img, title, desc }) =>{
    return(
        <>
        <div className="flex flex-col items-center justify-center  mb-[50px] w-[300px] ml-[20px] bg-white rounded-3xl ">
              <div className="w-[90px] h-[90px] rounded-full bg-[#4361EE] items-center justify-center mt-[60px]">
                <img
                 src = {img}
                  className="h-[40px] w-[40px] mt-7 ml-6"
                  alt=""
                />
              </div>
              <h4 className="font-[Poppins] text-center text-[19.4px] text-[#2B2B2B] pt-[30px] pb-[20px] ">
                {title}
              </h4>
              <p className="font-[Poppins] text-center text-[16px] text-[#808080] px-[50px] pb-[30px]">
                {desc}
              </p>
        </div>
        </>
    )
}
// iterating 
const cards = List.map(({img, title, desc}, idx) => (
    <Card img={img} title={title} desc={desc} key={idx} />
));



const Section7 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[150px] bg-[#D4D4D4]">
        <div className="flex flex-col justify-center items-center text-center gap-[20px] mt-[100px]">
          <p className="font-[Poppins] text-[19.4px] text-[#2B2B2B]">
            OUR SERVICES
          </p>
          <h2 className="font-[poppins] text-[39.8px] text-[#0B090A]">
            Donec porttitor euismod dignissim
          </h2>
        </div>
         <div className="  text-primary-content flex flex-row mb-[50px] mt-[70px] ml-[50px] gap-[50px]">
            {cards}
          </div>
        </div>
    
    </>
  );
};

export default Section7;



