import React from 'react';
// import { IoIosArrowDown } from "react-icons/io";
import { dropdown,faqimg } from '../assets';
import FAQCard from './FAQCard';

const FAQ = () => {
 return (
    <div className='flex flex-col md:flex-row items-center justify-around text-white mb-2 p-3 pt-[50px] '>
        <div className='mb-4 md:mb-0'>
            <img className='w-full md:w-[503px] h-auto md:h-[503px]' src={faqimg} alt="FAQ" />
        </div>
        <div className='text-center md:text-left mt-[30px]'>
            <p className='font-shojumaru text-[#ED0137] text-lg md:text-3xl mb-4 text-center'>FAQ</p>
            <div className='flex flex-col gap-4'>
             <FAQCard text="Why choose Saviour" number="1"/> 
             <FAQCard text="Why is the IDO duration so long?" number="2" />
             <FAQCard text="When will trading go live?" number="3" />
             <FAQCard text="When can we claim the tokens?" number="4" />
            </div>
        </div>
    </div>
 )
}

export default FAQ;
