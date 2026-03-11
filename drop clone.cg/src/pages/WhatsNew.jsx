import React from 'react';

const WhatsNew = () => {
  const audiophileItems = [
    {
      id: 1,
      title: "Drop + SMSL HO150X Linear Headphone Amplifier",
      img: "https://massdrop-s3.imgix.net/product-images/drop-smsl-ho150x/FP/DcLCTmoxTfyJrkuVZs2Q_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      price: 199,
      oldPrice: null,
      off: null,
      rating: "★★☆☆☆ 1",
      comments: 1,
      timeLeft: "2 months left"
    },
    {
      id: 2,
      title: "Campfire Audio Time Stream Chromatic Series Cable",
      img: "https://massdrop-s3.imgix.net/product-images/campfire-audio-time-stream-chromatic-series-cable/FP/uupyDuXFSdOjbo3TjaNv_green.jpg?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      price: 29,
      oldPrice: 79,
      off: "63% OFF",
      rating: "★★★★☆ 11",
      comments: 11,
      timeLeft: "12 days left"
    },
    {
      id: 3,
      title: "Boom Mic for Drop + THX Panda Headphones",
      img: "https://massdrop-s3.imgix.net/product-images/boom-mic-for-drop-thx-panda-headphones/FP/UEt14JnORcykz7cv26GS_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      price: 5,
      oldPrice: 49,
      off: "90% OFF",
      rating: "★★★★★ 2",
      comments: "Comment",
      timeLeft: "2 months left"
    },
    {
      id: 4,
      title: "MEE audio Connect Air Bluetooth Adapter",
      img: "https://massdrop-s3.imgix.net/product-images/mee-audio-connect-air-bluetooth-adapter/FP/SKkkRQ9QuGjvYbcHEGOS_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=2&chromasub=444&q=35",
      price: 29,
      oldPrice: 50,
      off: "42% OFF",
      rating: "★★★★★ 2",
      comments: "Comment",
      timeLeft: "2 months left"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Promo Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 lg:p-20 bg-black text-white gap-10">
        <div className="flex-1 max-w-xl">
          <h2 className="text-[32px] lg:text-[45px] font-bold leading-tight mb-5">
            THE CSTM80 <br /> BAREBONES IS BACK IN BLACK (& WHITE)
          </h2>
          <p className="text-xl mb-8">Make your next build monochromatic.</p>
          <button className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-gray-200 transition-colors">
            SHOP NOW
          </button>
        </div>
        <div className="flex-1">
          <img 
            src="https://massdrop-s3.imgix.net/whats-new/7JejEzUJSCiEFNsb6Har_NmjgHAtSIWBDNAgZyuQp_CSTM80_BARE.png?auto=format&fm=jpg&fit=crop&w=910&h=450&dpr=2&chromasub=444&q=35" 
            alt="Keyboard Promo" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[2rem] font-extrabold uppercase">SHOP NEW AUDIOPHILE</h2>
          <a href="#" className="text-black font-bold text-sm hover:underline flex items-center gap-2">
            SEE ALL <span className="text-xl">➜</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiophileItems.map((item) => (
            <div key={item.id} className="border border-[#ddd] rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden h-[200px]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-bold mb-2 line-clamp-2">{item.title}</h3>
                <div className="text-sm mb-2">
                  <span className="font-bold text-black">${item.price}</span>
                  {item.oldPrice && (
                    <>
                      <span className="text-gray-400 line-through ml-2">${item.oldPrice}</span>
                      <span className="text-orange-600 font-bold ml-2">{item.off}</span>
                    </>
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-3">{item.rating}</div>
                <div className="text-xs text-gray-500 font-medium mb-3">Free Returns in USA</div>
                <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-[11px] text-gray-500 uppercase tracking-tighter">
                  <span className="flex items-center gap-1">💬 {item.comments}</span>
                  <span>{item.timeLeft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatsNew;
