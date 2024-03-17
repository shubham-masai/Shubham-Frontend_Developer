import React from 'react';
import { dropdown, intrologo } from '../assets';

const Introduction = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center px-[10%] gap-10 overflow-x-hidden">
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:flex-grow-0">
                <h1 className="text-left font-shojumaru text-red-500 text-4xl font-normal leading-[52px] tracking-normal">INTRODUCTION</h1>
                <p className="text-left text-white font-zcool text-[1.4rem]">
                    We've all been in the mud once, and now we've decided to
                    fight it out. Pay tribute to those pioneers of WEB3 and the warriors
                    who dedicated their love to the blockchain. Save the lucky ones alive,
                    join us to save the future! Our mission is to empower everyone to
                    share wealth and succeed.
                </p>
    
                <button className="bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.3rem] p-[10px] text-[20px] font-zcool text-white shadow-lg h-[60px] w-[200px] flex items-center justify-center gap-2 mt-6">
                    Document
                    <span className='bg-transparent'>
                        <img src={dropdown} alt="dropdown" className='w-[16px] h-[16px] bg-removel' />
                    </span>
                </button>

            </div>
            <div className="w-full md:w-1/2 ">
                <img
                    src={intrologo}
                    alt="Brik-matrix-logo"
                    className=" w-full h-full max-w-[500px] max-h-[500px]"
                />
            </div>
        </div>
    );
}

export default Introduction;
