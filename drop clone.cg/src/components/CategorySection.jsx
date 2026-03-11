import React from 'react';

const CategorySection = () => {
  const categories = [
    {
      name: 'Keyboards',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/keyboards-desktop-02.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    },
    {
      name: 'Headphones',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/Headphones-desktop.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    },
    {
      name: 'Desk Mats',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/Deskmats-desktop.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    },
    {
      name: 'Keycaps',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/keycaps-desktop-02.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    },
    {
      name: 'Amps',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/AMPS-desktop.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    },
    {
      name: 'Desk Accessories',
      img: 'https://massdrop-s3.imgix.net/img_site/shop_by_category/desk-accessories-desktop-02.jpg?auto=format&fm=jpg&fit=crop&w=450&h=450&dpr=2&chromasub=444&q=35'
    }
  ];

  return (
    <section className="px-7 lg:px-15 py-12">
      <h2 className="text-[32px] font-bold mb-6">SHOP BY CATEGORY</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.05]">
            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-xl transition-transform duration-400 hover:scale-105" />
            <a href="#" className="text-[20px] font-semibold mt-2.5 text-[#111] hover:text-[#0077ff]">{cat.name} →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
