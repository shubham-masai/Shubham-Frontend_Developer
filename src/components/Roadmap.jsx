
import React from 'react';
import { roadmap, card1, card2, card3, card4 } from "../assets";

const Roadmap = () => {
    return (
        <div className="flex flex-col justify-center items-center overflow-x-hidden pb-10"
            style={{
                backgroundImage: `url(${roadmap})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <p className="roadmap text-red-500">ROAD MAP</p>
            <div className="w-full flex flex-wrap justify-center gap-10 bg-transparent mt-20 relative">
                <div className="card-container relative">
                    <img src={card1} alt="card1" className="card-div"/>
                    <div className="text-white absolute bottom-4 left-4 p-3 w-full bg-transparent">
                        <p className='bg-transparent font-bold'>Phase 1</p>
                        <p className='bg-transparent text-white opacity-70'>Technical Readiness and Smart Contract Audit</p>
                    </div>
                </div>
                <div className="card-container relative">
                    <img src={card2} alt="card2" className="card-div" />
                    <div className="text-white absolute bottom-4 left-4  w-full bg-transparent">
                        <p className='bg-transparent font-bold'>Phase 2</p>
                        <p className='bg-transparent text-white opacity-70'>Increase Liquidity and Trading Volume</p>
                    </div>
                </div>
                <div className="card-container relative">
                    <img src={card3} alt="card3" className="card-div"/>
                    <div className="text-white absolute bottom-4 left-4 p-2 w-full bg-transparent">
                        <p className='bg-transparent font-bold'>Phase 3</p>
                        <p className='bg-transparent text-white opacity-70'>Community Building and Marketing</p>
                    </div>
                </div>
                <div className="card-container relative">
                    <img src={card4} alt="card4" className="card-div" />
                    <div className="text-white absolute bottom-4 left-4 p-2 w-full bg-transparent">
                        <p className='bg-transparent font-bold'>Phase 4</p>
                        <p className='bg-transparent text-white opacity-70'>Ecosystem Expansion and Partnerships</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roadmap;
