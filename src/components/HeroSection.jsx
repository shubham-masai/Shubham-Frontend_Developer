import React from 'react';
import { Rectangle18 } from "../assets";

const HeroSection = () => {
    return (
        <div
            className="flex justify-center items-center min-h-[650px] p-[6rem_13%] overflow-x-hidden"
            style={{
                backgroundImage: `url(${Rectangle18})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >

            <p className='text-white text-center font-shojumaru bg-transparent text-4xl hidden sm:block'>
                Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
            </p>

            {/* Visible only on small screens */}
            <p
                className='text-white text-center font-shojumaru text-4xl sm:hidden'
                style={{
                    maxWidth: '700px',
                    padding: '5rem',
                    marginTop: '60px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }}
            >
                Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
            </p>
        </div>
    );
}

export default HeroSection;