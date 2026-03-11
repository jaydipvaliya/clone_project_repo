import React from 'react';

const Main2 = () => {
  return (
    <div className="flex flex-wrap w-full gap-[15px] justify-center items-center mt-[20px] px-4 lg:px-[85px]">
      {/* Keycaps Box */}
      <div className="flex-1 min-w-[300px] h-[450px] bg-[url('https://massdrop-s3.imgix.net/marketingContent/pNy5u2X1S4eJQZFvxhlI_nOBYsSVRSqmkotNctUws_MECHA-00_01.png?auto=format&fm=jpg&fit=crop&w=720&dpr=1.25&chromasub=444&q=56')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-5 relative overflow-hidden group">
        <div className="text-[26px] lg:text-[32px] font-semibold mb-[15px] leading-tight text-shadow-[1px_1px_8px_rgba(0,0,0,0.6)]">
          DROP + FU11.MEtA1 GMK MECHA-00 <br /> KEYCAP SET
        </div>
        <div className="flex flex-wrap justify-center">
          <button className="px-6 py-3 m-2 bg-white text-black font-bold rounded-md transition-transform hover:scale-105 cursor-pointer">
            SHOP NOW
          </button>
          <button className="px-6 py-3 m-2 border-2 border-white bg-transparent text-white font-bold rounded-md transition-transform hover:scale-105 cursor-pointer">
            SHOP CHERRY PROFILE
          </button>
        </div>
      </div>

      {/* Headphones Box */}
      <div className="flex-1 min-w-[300px] h-[450px] bg-[url('https://massdrop-s3.imgix.net/marketingContent/HEDwecYMT9edLQ5WFUhM_0817-copy-pdp.jpg?auto=format&fm=jpg&fit=crop&w=720&dpr=1.25&chromasub=444&q=56')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-5 relative overflow-hidden group">
        <div className="text-[26px] lg:text-[32px] font-semibold mb-[15px] leading-tight text-shadow-[1px_1px_8px_rgba(0,0,0,0.6)]">
          DROP + SENNHEISER HD 6XX <br /> HEADPHONES
        </div>
        <div className="flex flex-wrap justify-center">
          <button className="px-6 py-3 m-2 bg-white text-black font-bold rounded-md transition-transform hover:scale-105 cursor-pointer">
            SHOP NOW
          </button>
          <button className="px-6 py-3 m-2 border-2 border-white bg-transparent text-white font-bold rounded-md transition-transform hover:scale-105 cursor-pointer">
            SHOP HEADPHONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main2;
