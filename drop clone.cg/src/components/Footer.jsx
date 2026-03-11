import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-[60px] px-[5%] mt-[100px] text-white">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-[40px]">
          <h2 className="text-[32px] font-extrabold tracking-[2px]">DROP</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px]">
          <div className="footer-column">
            <h3 className="text-[14px] font-bold mb-[15px] tracking-widest uppercase">Help</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Help Center</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-[14px] font-bold mb-[15px] tracking-widest uppercase">About</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Our Story</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Affiliates</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-[14px] font-bold mb-[15px] tracking-widest uppercase">Community</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Discussion</a></li>
              <li className="mb-2"><a href="#" className="text-[#aaa] text-[13px] hover:text-white transition-colors">Guides</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="text-[14px] font-bold mb-[15px] tracking-widest uppercase">Connect</h3>
            <div className="flex gap-[15px] mt-[10px]">
              <a href="#" className="hover:scale-120 transition-transform"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-[22px] h-[22px] invert" /></a>
              <a href="#" className="hover:scale-120 transition-transform"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-[22px] h-[22px] invert" /></a>
              <a href="#" className="hover:scale-120 transition-transform"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-[22px] h-[22px] invert" /></a>
            </div>
            <p className="text-[#aaa] text-[13px] leading-[1.6] mt-4">
              Get the latest updates and exclusive offers. <a href="#" className="text-white underline">Sign up</a>
            </p>
          </div>
        </div>

        <div className="text-right mt-[40px] pt-[20px] border-t border-[#333] text-[#aaa] text-[13px]">
          © 2026 DROP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
