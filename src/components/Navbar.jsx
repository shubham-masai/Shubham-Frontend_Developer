import React from "react";
import { LogoSaviour, dropdown, menu } from "../assets";
import { useWeb3Modal } from '@web3modal/wagmi1/react'

function Navbar() {

    const { open } = useWeb3Modal();

    return (
        <div className="fixed flex justify-between items-center h-[117px] w-full p-[27px] p-[5%] top-[27px] bg-transparent z-50">
            {/* Left side - Logo and Saviour text */}
            <div className="flex items-center gap-4 bg-transparent">
                {/* Show menu icon for small screens */}
                <img
                    src={menu}
                    className="w-10 h-10 cursor-pointer block md:hidden bg-removel"
                    alt="menu"
                />
                <img
                    src={LogoSaviour}
                    className="object-cover w-[100px] h-[111px] mt-8 bg-removel"
                    alt="Logo Saviour"
                />
                <p className="hidden md:block text-white font-zcool text-[1.2rem] bg-transparent">Saviour</p>
            </div>

            {/* Center - Navigation items */}
            <div className="hidden md:flex max-w-[583px] h-[52px] bg-[#181918] flex items-center gap-[24px] justify-center p-[16px] p-[24px] text-white rounded-[20px]">
                {/* Show navigation items for small screens */}
                <span className="font-zcool text-[1rem] hover:text-red-500 cursor-pointer block bg-transparent">Home</span>
                <span className="font-zcool text-[1rem] hover:text-red-500 cursor-pointer block bg-transparent">IDO</span>
                <span className="font-zcool text-[1rem] hover:text-red-500 cursor-pointer block bg-transparent">Tokenomics</span>
                <span className="font-zcool text-[1rem] hover:text-red-500 cursor-pointer block bg-transparent">Roadmap</span>
                <span className="flex items-center gap-1 font-zcool text-[1rem] hover:text-red-500 cursor-pointer block bg-transparent">Coming Soon</span>
                <span className="bg-transparent">
                    <img src={dropdown} alt="dropdown" className="w-[16px] h-[16px] bg-removel" />
                </span>
            </div>

            {/* Right side - Connect Wallet button */}
            <button className="bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.1rem] p-[10px] text-[12px] text-white shadow-lg h-[50px] w-[137px]" onClick={() => open()}>
                Connect Wallet
            </button>
        </div>
    );
}

export default Navbar;
