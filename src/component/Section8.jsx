// import React from "react";

// const City = ({img, children}) =>{
//     return(
//         <div
//         className="w-[300px] h-[320px] bg-center bg-no-repeat bg-cover "
//         style={{
//           backgroundImage: {img}, 
//         }}
//       >
//         <h1 className="font-[Poppins] text-[57.3px] text-[#FFFFFF55] pl-[40px] pt-[146px]">
//           {" "}
//           {children}{" "}
//         </h1>
//         <h4 className="font-[Poppins] text-[19.4px] text-[#FFFFFF] pl-[40px] ">
//           {" "}
//           {children}{" "}
//         </h4>
//       </div>
//     );
// }

// const Section8 = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <p className="font-[Poppins] text-[19.4px] text-[#4361EE]">
//             AREAS ACROSS THE TOWN
//           </p>
//           <h2 className="font-[Poppins] text-[39.8px] text-[#2B2B2B]">
//             Neighborhood Properties
//           </h2>
//           <div className="grid grid-cols-3 items-center justify-center ">
//             <City img={`url(/houston.png)`}>
//                 <h1> 216 </h1>
//                 <h4> Houston </h4>
//             </City>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Section8;



import React from "react";

const City = ({ img, width, children }) => {
  return (
    <div
      className="w-[300px] h-[320px] bg-center bg-no-repeat bg-cover "
      style={{
        backgroundImage: `url(${img})`,
        width: width,
      }}
    >
      <h1 className="font-Poppins text-[57.3px] text-[#FFFFFF55] pl-[40px] pt-[146px]">
        {" "}
        {children[0]}{" "}
      </h1>
      <h4 className="font-Poppins text-[19.4px] text-[#FFFFFF] pl-[40px] ">
        {" "}
        {children[1]}{" "}
      </h4>
    </div>
  );
};

const Section8 = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-start justify-center mx-40 pt-[150px]">
          <p className="font-Poppins text-[19.4px] text-[#4361EE] ">
            AREAS ACROSS THE TOWN
          </p>
          <h2 className="font-Poppins text-[39.8px] text-[#2B2B2B]">
            Neighborhood Properties
          </h2>
        </div>
          <div className="flex flex-wrap items-center justify-center mx-[100px]">
            <City img="/newYork.png" width="300px">
              <h1>216</h1>
              <h4>New York City, NY</h4>
            </City>
            <City img="/houston.png" width="300px">
              <h1> 141</h1>
              <h4>Houston, TX</h4>
            </City>
            <City img="/houstontx.png" width ="420px">
              <h1>212</h1>
              <h4>San Diego, CA</h4>
            </City>
            <City img="/philadelphia.png" width="412px">
              <h1> 183</h1>
              <h4>Philadelphia, PA</h4>
            </City>
            <City img="/san.png" width="658px">
            <h1> 112</h1>
              <h4>San Francisco, CA</h4>
            </City>
          </div>
      </div>
    </>
  );
};

export default Section8;

