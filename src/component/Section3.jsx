import React from 'react'

const Section3 = () => {
  return (
    <>
    <div className='flex flex-row items-center justify-center mx-[160px] mt-20'>
        <div className='flex flex-col'>
            <div className='mr-7'>
            <p className='text-[19.4px] font-normal font-[Poppins] text-[#4b5894] pl-1 pb-[20px]'>
                WHO ARE WE
            </p>
            <h3 className='text-[30.4px] leading-10 text-left font-[Poppins] text-[#2B2B2B]'>
                Assisting individuals in locating the appropriate real estate
            </h3>
            <p className='text-[#444444] text-[12px] pt-[25px] leading-6 font-normal '>
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.
            </p>
            </div>
            <div className='flex flex-row justify-center mx-3 gap-5 items-center bg-white shadow-2xl shadow-white-900/40 rounded-3xl h-[131px] w-[300px] px-4 mt-5'>
            <img src="/smarthome.png" alt="smarthome" className='h-[30.68px] w-8 ' />
            <div>
                <h4 className='text-[#4361EE] text-[19.4px] font-[Poppins] font-medium'>Donec porttitor euismod</h4>
                <p className='font-[20px] text-[#64748B] font-[Poppins] leading-[20px]'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
            </div>
            <div className='flex flex-row justify-center mx-3 gap-5 items-center bg-white shadow-2xl shadow-white-900/40 rounded-3xl h-[131px] w-[300px] px-4 mt-5'>
            <img src="/useroctagon.png" alt="smarthome" className='h-[30.68px] w-8 ' />
            <div>
                <h4 className='text-[#4361EE] text-[19.4px] font-[Poppins] font-medium'>Donec porttitor euismod</h4>
                <p className='font-[20px] text-[#64748B] font-[Poppins] leading-[20px]'>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            </div>
            </div>
        </div>
        <div className='flex flex-row justfy-center items-center'>
          <div className='flex flex-row items-center justify'>
        <div className='mt-[120px] ml-[23px]'>
        <div
      className="w-[280px] h-[500px]  left-[703px] bg-cover bg-no-repeat rounded-tl-30"
      style={{
        backgroundImage: `url(/house1.png)`,
        backgroundPosition: 'center',
        borderRadius: '30px 0 0 0', 
      }}
    />
        </div>
        <div className="">
      <div
        className="w-[277px] h-[280px] top-[1496.01px] left-[1003px] bg-cover bg-no-repeat rounded-tl-[30px]"
        style={{
          backgroundImage: `url(/house2.png)`,
          backgroundPosition: 'center',
          borderRadius: '30px 0 0 0', 

        }}
      />
      <div
        className="w-[277px] h-[180px] top-[1404px] left-[887px] bg-cover bg-no-repeat rounded-tl-[30px]"
        style={{
          backgroundImage: `url(/house3.png)`,
          backgroundPosition: 'center',
          borderRadius: '30px 0 0 0', 

        }}
      />
    </div>
    </div>  
    </div>
    <div
      className="absolute w-[206px] h-[205.95px]  -mt-[100px] top-[1404px] left-[887px] bg-cover bg-no-repeat -translate-y-4 -translate-x-40 "
      style={{
        backgroundImage: `url(/circle.png)`,
        backgroundPosition: 'center',
      }}
    >
      
    </div>
    <div className='h-[60px] w-[60px] rounded-full absolute mt-[410px] bg-gradient-to-b from-[#4361EE00] to-[#4361EE] ml-[600px] -rotate-45'></div>
    </div>
    </>
  )
}

export default Section3
