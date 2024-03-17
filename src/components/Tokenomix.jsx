import React from 'react';
import { tokenomics, tokenomicsbg } from '../assets';
const Tokenomix = () => {
    return (
        <div className="bg-black w-[100%] flex flex-col text-white overflow-x-hidden">
            <div className="w-[100%] h-fit flex flex-col items-center px-[10%] max-[600px]:p-[10px]" style={{
                backgroundImage: `url(${tokenomicsbg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="flex flex-col mt-[2rem] mb-[2rem] items-center w-full gap-[5%] max-[600px]:gap-[2%] bg-transparent">
                    <h3 className="text-red-500 font-shojumaru text-[2.3rem] bg-transparent">
                        Tokenomics
                    </h3>
                    <div className="flex items-start justify-center max-[1285px]:items-center max-[1285px]:flex-col gap-[9rem] w-[100%] h-[100%] bg-transparent">
                        <div className="basis-1/2 flex flex-col items-center w-full h-full bg-transparent">
                            <div className="flex flex-col items-center justify-center bg-transparent">
                                <div className="bg-[#ED0137] flex justify-center items-center w-[12.4rem] h-[3rem] translate-y-[1.5rem] rounded-[1.2rem]">
                                    <p className="font-shojumaru text-[1rem] text-white bg-transparent">
                                        Token Info
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[5rem] pb-[2rem] w-[25rem] bg-transparent">
                                    <table className="w-[90%] bg-transparent">
                                        <tbody className="font-zcool text-[1rem] flex flex-col gap-[1rem] w-[100%] bg-transparent">
                                            <tr className="w-[100%] bg-transparent">
                                                <td className="w-[100%] bg-transparent">Name</td>
                                                <td className="text-[#DF180A] w-[100%] text-left  text-nowrap bg-transparent">
                                                    Saviour
                                                </td>
                                            </tr>
                                            <tr className="w-[100%] bg-transparent">
                                                <td className="w-[100%] bg-transparent">Symbol</td>
                                                <td className="text-[#DF180A] bg-transparent text-left w-[100%]  text-nowrap">
                                                    SVR
                                                </td>
                                            </tr>
                                            <tr className="w-[100%] bg-transparent">
                                                <td className="w-[100%] bg-transparent">Total Supply</td>
                                                <td className="text-[#DF180A] bg-transparent text-left w-[100%]  text-nowrap">
                                                    1000 Trillion
                                                </td>
                                            </tr>
                                            <tr className="w-[100%] bg-transparent">
                                                <td className="w-[100%] bg-transparent">Decimals</td>
                                                <td className="text-[#DF180A] bg-transparent text-left w-[100%]  text-nowrap">
                                                    18
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 h-[100%] self-center bg-transparent">
                            <div className="h-[100%] flex justify-center items-center bg-transparent zoom-on-hover">
                                <img
                                    height={706}
                                    width={1512}
                                    src={tokenomics}
                                    alt="token info"
                                    className='bg-removel'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomix;
