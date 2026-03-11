import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between px-6 lg:px-[60px] py-[10px] border-b-2 border-black bg-white relative z-50">
      <Link to="/" className="text-[32px] font-black tracking-widest cursor-pointer">DROP</Link>

      {/* Menu Toggle for Mobile */}
      <div 
        className="flex flex-col justify-center gap-[5px] cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`w-[25px] h-[3px] bg-black rounded transition-transform ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
        <span className={`w-[25px] h-[3px] bg-black rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-[25px] h-[3px] bg-black rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`
        ${isOpen ? 'flex' : 'hidden'} 
        lg:flex items-center gap-[30px]
        absolute lg:static top-[60px] left-0 w-full lg:w-auto
        bg-white lg:bg-transparent border-t-2 lg:border-0 border-black lg:border-none
        flex-col lg:flex-row py-[15px] lg:py-0 text-center
      `}>
        <Link to="/whats-new" className="text-[#111] font-bold text-base tracking-wider hover:text-[#555]">WHAT'S NEW</Link>
        <Link to="/shop" className="text-[#111] font-bold text-base tracking-wider hover:text-[#555]">SHOP</Link>
        <a href="#" className="text-[#111] font-bold text-base tracking-wider hover:text-[#555]">SALE</a>
        <span className="hidden lg:block w-[1px] h-[20px] bg-[#ccc]"></span>
        <a href="#" className="text-[#111] font-bold text-base tracking-wider hover:text-[#555]">COMMUNITY</a>
      </nav>

      {/* Icons & Buttons */}
      <div className="hidden lg:flex items-center gap-[20px]">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Search" className="w-[20px] h-[20px]" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" className="w-[20px] h-[20px]" /></a>
        <a href="#" className="text-[#111] font-bold tracking-wider hover:text-[#555]">LOG IN</a>
        <a href="#" className="text-[#111] font-bold tracking-wider hover:text-[#555]">SIGN UP</a>
      </div>
    </header>
  );
};

export default Navbar;
