import React from 'react';

const Section2 = () => {
  return (
    <>   
    <div className='bg-white mt-20 flex flex-col items-center justify-center text-center h-48 w-full'>
    <div className='flex flex-row gap-20 justify-center'>
      <p className='text-base text-Poppins mt-20'>Trusted by 100+ Companies across the globe!</p>
    </div> 
      <div className='flex flex-row items-center justify-center pt-10 gap-24'>
      <img src="/google.png" className='w-24 h-8 mx-2 mix-blend-luminosity' alt="Google"/>
        <img src="/logitech.png" className='w-24 h-8 mx-2 mix-blend-luminosity' alt="Logitech"/>
        <img src="/spotify.png" className='w-24 h-8 mx-2 mix-blend-luminosity' alt="Spotify"/>
        <img src="/samsung.png" className='w-24 h-8 mx-2 mix-blend-luminosity' alt="Samsung"/>
        <img src="/netflix.png" className='w-24 h-8 mx-2 mix-blend-luminosity' alt="Netflix"/>
      </div>
    </div>
      <div className='h-[100px] w-[100px] rounded-full absolute -mt-[180px] bg-gradient-to-b from-[#4361EE] to-[#4361EE00] ml-48 -rotate-45'></div>
    </>

  );
};

export default Section2;
