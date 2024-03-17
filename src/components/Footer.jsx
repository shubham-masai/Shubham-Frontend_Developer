import React from "react";
import {footerLogo,socialmedia,twitter,email,telegram} from "../assets" 

const Footer = () => {
  return (
    <div className="bg-gradient-bg  m-auto flex flex-col justify-center items-center gap-4 p-4 mt-[70px]">
      <img
        className="w-full md:w-[200px] h-auto md:h-[163px]"
        src={footerLogo}
        alt="logo"
      />
      <div className="bg-gradient-to-r from-[#FF002A] via-[#720005] to-[#FF002A] text-transparent bg-clip-text text-[24px] font-extrabold">
        SITEMAP
      </div>

      <div className="font-poppins font-bold text-white text-xs md:text-[12px] flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          IDO
        </a>
        <a href="#" className="hover:text-gray-300">
          Tokenomics
        </a>
        <a href="#" className="hover:text-gray-300">
          Road Map
        </a>
        <a href="#" className="hover:text-gray-300">
          Whitepaper
        </a>
        <a href="" className="hover:text-gray-300">
          Pledge
        </a>
        <a href="" className="hover:text-gray-300">
          NFT
        </a>
        <a href="" className="hover:text-gray-300">
          Games
        </a>
      </div>

      <div className="bg-gradient-bg gap-2 flex justify-center ml-0 ">
        {/* <img
          className="w-full h-auto md:w-auto md:h-auto lg:w-[211px] lg:h-[27px] object-contain"
          src={socialmedia}
          alt="socialmedia"
        /> */}
        <img className="w-[28px] h-[28px]" src={twitter} alt="twitter" />
        <img className="w-[28px] h-[28px]"  src={telegram} alt="telegram" />
        <img className="w-[28px] h-[28px]"  src={email} alt="email" />
      </div>
    </div>
  );
};

export default Footer;
