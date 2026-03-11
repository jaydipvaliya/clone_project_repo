import React from 'react';
import Hero from '../components/Hero';
import Main2 from '../components/Main2';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <>
      <Hero />
      <Main2 />
      <CategorySection />

      {/* Keyboard Configurator Section */}
      <section className="flex flex-col lg:flex-row w-full max-w-[1300px] mx-auto mb-[50px] bg-white rounded-lg overflow-hidden shadow-lg px-4 lg:px-0">
        <div className="flex-1">
          <img 
            src="https://massdrop-s3.imgix.net/marketingContent/pNy5u2X1S4eJQZFvxhlI_nOBYsSVRSqmkotNctUws_MECHA-00_01.png?auto=format&fm=jpg&fit=crop&w=720&dpr=1.25&chromasub=444&q=56" 
            alt="Keyboard Configurator" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 bg-[#ffd54f] text-[#222] flex flex-col justify-center items-center text-center p-10 lg:p-15">
          <h2 className="text-[28px] font-bold mb-[15px]">BUILD YOUR OWN KEYBOARD</h2>
          <p className="text-base leading-relaxed max-w-[400px] mb-[30px]">
            From switches to keycaps, create a setup that's uniquely yours. Start your custom build today.
          </p>
          <button className="bg-[#1e1e1e] text-white font-bold text-sm tracking-wider px-7 py-3 rounded hover:bg-[#333] transition-colors cursor-pointer">
            START CONFIGURING
          </button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-[1200px] mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[2rem] font-extrabold">NEW ARRIVALS</h2>
          <a href="#" className="text-black font-semibold text-sm hover:underline">SEE ALL</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-[#ddd] rounded-lg p-4 bg-white hover:shadow-md transition-shadow flex flex-col">
              <img 
                src={`https://massdrop-s3.imgix.net/marketingContent/pNy5u2X1S4eJQZFvxhlI_nOBYsSVRSqmkotNctUws_MECHA-00_01.png?auto=format&fm=jpg&fit=crop&w=300&h=300&dpr=1`} 
                alt="Product" 
                className="w-full rounded-md mb-3"
              />
              <h3 className="text-base font-semibold mb-1">DROP CSTM80 MECHANICAL KEYBOARD</h3>
              <div className="text-sm mb-1">
                <span className="text-black font-bold">$99</span>
                <span className="text-[#777] line-through ml-2">$149</span>
                <span className="text-[#d87f00] font-bold ml-2">33% OFF</span>
              </div>
              <div className="text-xs text-[#777] mt-auto">4.5 ★ (120 reviews)</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
