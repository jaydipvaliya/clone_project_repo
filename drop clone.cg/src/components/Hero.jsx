import React from 'react';

const Hero = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[url('https://massdrop-s3.imgix.net/marketingContent/SxfJC83mQe40y1oDb2jK_HALLOWHEEL_1202-copy-homepage.jpg?auto=format&fm=jpg&fit=crop&w=1440&dpr=1.25&chromasub=444&q=56')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-5">
      <div className="max-w-4xl">
        <h1 className="text-[30px] lg:text-[45px] font-semibold leading-tight mb-2">KILLER COUPONS--NO COSTUME REQUIRED</h1>
        <h4 className="text-[18px] lg:text-[22px] mb-6 px-2.5">Spin the Hallowheel for the best treats on the block.</h4>
        <button className="px-6 py-3 bg-white text-black font-bold rounded-md bg-[linear-gradient(-45deg,#fdcf41_10%,transparent_0)] transition-all hover:bg-[linear-gradient(-45deg,#fdcf41_100%,transparent_0)] cursor-pointer">
          SPIN THE HALLOWHEEL
        </button>
      </div>
    </section>
  );
};

export default Hero;
