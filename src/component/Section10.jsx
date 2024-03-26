import React from "react";
import { BsArrowRight } from "react-icons/bs";


// create a list of the pictures and the secificatios of things each of those pictures should have
let data = [
  {
    bgImg: "/img1.png",
    img: "/1.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    bgImg: "/img2.png",
    img: "/2.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
  {
    bgImg: "/img3.png",
    img: "/3.png",
    title: "Top 10 Home Buying Mistakes to Avoid",
    desc: "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
  },
];

// hard code one of the image or div to the styles you want and pass in props according to the array when appriopraite
const Card = ({ bgImg, Img, title, desc }) => {
  return (
    <div className="flex flex-col items-start justify-center max-w-[65%]">
      <div
        className="w-[340px] h-[240px] rounded-3xl bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      />
      <img src={Img} alt="date" className="absolute mb-[252px] ml-[50px]" />
      <h3 className="font-[30.6px] font-[Poppins] leading-10 text-white pl-[23px]">
        {title}
      </h3>
      <p className="font-[Poppins] font-[16px] leading-6 text-[#D4D4D4] pl-[23px]">
        {desc}
      </p>
    </div>
  );
};

// map through that array and pass in that props as its parameter then return the funtion that has the idea designs and add the props eg is line 49
const cards = data.map(({ bgImg, img, title, desc }, idx) => (
  <Card bgImg={bgImg} Img={img} title={title} desc={desc} key={idx} />
));

const Section10 = () => {
  return (
    <>
      <div className="bg-[#03AEFD] w-full flex flex-col items-center justify-center">
        <div className="flex flex-col text-align justify-center">
        <p className="font-[Poppins] text-[19.4px] text-center text-white pt-[80px]">
          {" "}
          WHAT’S TRENDING
        </p>
        <h2 className="font-[Poppins] text-[59.8px] text-white pt-[10px]">
          {" "}
          Latest Blogs & Posts{" "}
        </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px] mx-[160px] mt-[25px]">
          {cards}
        </div>
        <div className="flex flex-row  gap-[300px] mt-[30px] mb-8">
          <div className="bg-white rounded-full w-[40px] h-[40px] items-center justify-center text-center ml-[230px]">
            <BsArrowRight className="m-0 mx-auto mt-2 text-[#03AEFD]  text-[24px]" />
          </div>
          <div className="bg-white rounded-full w-[40px] h-[40px] items-center justify-center text-center">
            <BsArrowRight className="m-0 mx-auto mt-2 text-[#03AEFD]  text-[24px]" />
          </div>
          <div className="bg-white rounded-full w-[40px] h-[40px] items-center justify-center text-center">
            <BsArrowRight className="m-0 mx-auto mt-2 text-[#03AEFD]  text-[24px]" />
          </div>
        </div>
        <div>
          {/* //sliding elements remeber to remove the mb added to the arrow tags  */}
        </div>
      </div>
    </>
  );
};

export default Section10;
