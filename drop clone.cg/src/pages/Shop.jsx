import React from 'react';

const Shop = () => {
  const shopCategories = [
    {
      name: "Mechanical Keyboards",
      img: "https://massdrop-s3.imgix.net/img_site/community_cards/mechanical-keyboards-20231213.jpg?auto=format&fm=jpg&fit=crop&w=262&h=175&exp=-12&shad=25&dpr=2&q=35"
    },
    {
      name: "Audiophile",
      img: "https://massdrop-s3.imgix.net/img_site/community_cards/audiophile-20231213.jpg?auto=format&fm=jpg&fit=crop&w=262&h=175&exp=-12&shad=25&dpr=1&q=70"
    },
    {
      name: "Battlestations",
      img: "https://massdrop-s3.imgix.net/img_site/community_cards/battlestations-20231213.jpg?auto=format&fm=jpg&fit=crop&w=262&h=175&exp=-12&shad=25&dpr=1&q=70"
    },
    {
      name: "Drop + The Lord of the Rings™",
      img: "https://massdrop-s3.imgix.net/img_site/community_cards/lotr-20231213.jpg?auto=format&fm=jpg&fit=crop&w=262&h=175&exp=-12&shad=25&dpr=1&q=70"
    },
    {
      name: "Mech Keys Builder",
      img: "https://massdrop-s3.imgix.net/img_site/community_cards/mech-keys-builder-20231213.jpg?auto=format&fm=jpg&fit=crop&w=262&h=175&exp=-12&shad=25&dpr=1&q=70"
    }
  ];

  const products = [
    {
      id: 1,
      title: "Drop + The Lord of the Rings™ Gondor™ CSTM80 Keyboard",
      img: "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-gondor-cstm80-keyboard/FP/mTRZDwpXQrCUvtqrX8nM_pc01.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
      price: 199,
      oldPrice: 249,
      off: "20% OFF",
      rating: "★★☆☆☆ 1",
      comments: 1,
      timeLeft: "2 months left"
    },
    {
      id: 2,
      title: "Drop + The Lord of the Rings™ Argonath Desk Mat",
      img: "https://massdrop-s3.imgix.net/product-images/drop-the-lord-of-the-rings-argonath-desk-mat/FP/11iwwBiKRJKtyDvlWKdK_pc1.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
      price: 39,
      oldPrice: 49,
      off: "20% OFF",
      rating: "★★★★☆ 11",
      comments: 11,
      timeLeft: "12 days left"
    },
    {
      id: 3,
      title: "Drop + DOOM™: The Dark Ages Desk Mat",
      img: "https://massdrop-s3.imgix.net/product-images/drop-doom-the-dark-ages-desk-mat/FP/PAY2hoGvRTeTn2s1TP9i_DOOM_DESK_MAT_2862-copy-pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
      price: 39,
      oldPrice: 49,
      off: "20% OFF",
      rating: "★★★★★ 2",
      comments: "Comment",
      timeLeft: "2 months left"
    },
    {
      id: 4,
      title: "Massdrop x Sennheiser HD 6XX Headphones",
      img: "https://massdrop-s3.imgix.net/product-images/massdrop-sennheiser-hd6xx/FP/BmcmXvwS0638Qf2xl47I_hd6xx-pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70",
      price: 199,
      oldPrice: 219,
      off: "20% OFF",
      rating: "★★★★★ 7.2k",
      comments: 1,
      timeLeft: "2 months left"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Category Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-12">
        <h2 className="text-2xl lg:text-[2.5rem] font-extrabold mb-10">
          SHOP: <span className="font-normal text-gray-400">ALL PRODUCTS<sup className="text-xs">564</sup></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {shopCategories.map((cat, index) => (
            <div key={index} className="relative h-[180px] rounded-lg overflow-hidden group cursor-pointer shadow-md">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 text-center">
                <span className="text-white font-bold text-sm tracking-tight leading-tight">{cat.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product List Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[2rem] font-extrabold uppercase">SHOP</h2>
          <a href="#" className="text-black font-bold text-sm hover:underline flex items-center gap-2">
            SEE ALL <span className="text-xl">➜</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
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
          
          <div className="border border-[#ddd] rounded-lg bg-[#fff7e6] flex flex-col justify-center items-start p-6 group cursor-pointer hover:bg-[#fff2cc] transition-colors relative h-[380px]">
            <h3 className="text-[1.5rem] font-extrabold mb-5 leading-tight">SEE ALL PRODUCTS</h3>
            <div className="absolute bottom-0 right-0 bg-[#ffd54f] p-3 text-xl font-bold rounded-tl-lg group-hover:p-4 transition-all">
              ➜
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
