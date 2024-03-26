import React from "react";

// creating an array of objects

let experts = [
    {
        img : "/team1.png",
        name: "Brendon M",
        postion: "CEO & Founder"
    },
    {
        img : "/team2.png",
        name: "Jodi J.Appleby",
        postion: "Real Estate Developer"
    },
    {
        img : "/team3.png",
        name: "Justin S.Meza",
        postion: "Listing Agent"
    },
    {
        img : "/team4.png",
        name: "Susan T.Smith",
        postion: "Buyer's Agent"
    }
]

// creating the Props
const Card = ({img, name, postion}) =>{
    return (
        <div className="flex flex-col max-w-[200px] items-center justify-center">
            <div
              className="w-[200px] h-[280px] bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
            <h3 className="font-[Poppins] text-[27.6px] text-[#0B090A]">
              {" "}
             {name}{" "}
            </h3>
            <h5 className="font-[Popins] text-[16px] text-[#4361EE]">
              {" "}
              {postion}{" "}
            </h5>
          </div>
    );
};

// mapping through the array and returning a props 
const cards = experts.map(({img, name,postion}, idx) => (
    <Card img={img} name={name} postion={postion} key={idx} />
));

const Section9 = () => {
  return (
    <>
      <div className="flex flex-col mt-[250px] justify-center mb-[150px]">
        <div className="flex flex-col items-center justify-center">
          <p className="font-[Poppins] text-[19.4px] text-center text-[#4361EE]">
            INTRODUCE YOURSELF TO{" "}
          </p>
          <h2 className="font-[Poppins] text-[39.8px] text-center text-[#2B2B2B]">
            {" "}
            Our Team of Experts{" "}
          </h2>
        </div>
        <div className="flex flex-row items-center justify-evenly mx-[100px] mt-[80px]">
           {cards} 
        </div>
      </div>
    </>
  );
};

export default Section9;
