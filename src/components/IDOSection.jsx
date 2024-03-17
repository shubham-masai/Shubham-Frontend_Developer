import React from "react";
import { copyicon, idobg } from "../assets";

const IDOEventSection = () => {
    return (
        <div className="bg-black w-full h-auto flex flex-col items-center text-white overflow-x-hidden">
            <div className="flex flex-col items-center text-white" style={{
                backgroundImage: `url(${idobg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

                <h3 className="text-red-500 font-shojumaru text-[2.152rem] text-center mt-[2rem] bg-transparent">
                    Participate in our IDO Event!
                </h3>

                <div className="w-full flex flex-col items-center lg:flex-row  justify-center bg-transparent">
                    <div className="w-full md:w-1/2 p-4 bg-transparent">

                        <div className="basis-1/2 flex flex-col items-center bg-transparent p-[2rem] px-[5rem]">
                            <p className="text-[1.192rem] font-zcool text-center leading-[1.5rem] bg-transparent">
                                During our IDO event, you will gain early access to our
                                revolutionary ecosystem, designed to empower everyone to share
                                wealth and achieve success.
                            </p>

                            <div className="flex flex-col items-center justify-center bg-transparent">
                                <div className="bg-[#ED0137] flex justify-center items-center w-[12.4rem] h-[3rem] translate-y-[1.5rem] rounded-[1rem] ">
                                    <p className="font-shojumaru text-[0.8rem] text-white bg-transparent">
                                        Token Info
                                    </p>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-[1.2rem] border-[2px] border-[#EF490F] rounded-[20px] p-[3rem] pb-[1rem] bg-transparent">
                                    <table className="w-[100%] bg-transparent">
                                        <tbody className="font-zcool text-[1rem] flex flex-col gap-[0.51rem] w-[100%] bg-transparent">
                                            <tr className="bg-transparent">
                                                <td className="w-[100%] bg-transparent">Total Token Supply</td>
                                                <td className="text-[#DF180A] w-[100%] text-left  text-nowrap bg-transparent">
                                                    20%
                                                </td>
                                            </tr>
                                            <tr  className="bg-transparent">
                                                <td className="w-[100%] bg-transparent">Soft Cap</td>
                                                <td className="text-[#DF180A] text-left w-[100%]  text-nowrap bg-transparent">
                                                    200 BNB
                                                </td>
                                            </tr>
                                            <tr className="bg-transparent">
                                                <td className="w-[100%] bg-transparent">Initial exchange rate</td>
                                                <td className="text-[#DF180A] text-left w-[100%]  text-nowrap bg-transparent">
                                                    1 BNB
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <p className="font-zcool text-[1rem] ml-[-1.5rem] mr-[-1.5rem] bg-transparent">
                                        Recommended Referral Commission
                                    </p>
                                    <table className="w-[100%] bg-transparent">
                                        <tbody className="font-zcool text-[1rem]  flex flex-col gap-[0.51rem] w-[100%] bg-transparent">
                                            <tr className="bg-transparent">
                                                <td className="w-[100%] bg-transparent">1st Generation</td>
                                                <td className="text-[#DF180A] text-left w-[100%] text-nowrap bg-transparent">
                                                    5%
                                                </td>
                                            </tr>

                                            <tr className="bg-transparent">
                                                <td className="w-[100%] bg-transparent">2nd Generation</td>
                                                <td className="text-[#DF180A] text-left w-[100%] bg-transparent">
                                                    2%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <button className="bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.3rem] p-[8px] text-[16px] font-zcool text-white shadow-lg h-[50px] w-[180px] flex items-center justify-center gap-2 mt-6">
                                Connect Wallet
                            </button>
                            <p className="font-shojumaru text-[1.8rem] text-red-500 text-center mt-[1rem] mb-[2rem] bg-transparent">
                                Become an affiliate & Earn 7% as Commission!
                            </p>

                            <div className="flex justify-center items-center gap-[1.5rem] w-[95%]">
                                <div className="flex justify-between h-[2.8rem] w-[100%] border-[1px] border-[#C4110C] rounded-[20px] ">
                                    <input
                                        className="h-fill w-[100%] bg-transparent text-[1rem] placeholder:text-[#808181] text-white font-zcool  p-[0px_2.4rem] border-none outline-none bg-transparent"
                                        type="text"
                                        placeholder="Generate a unique referral link"
                                    />
                                    <button className="h-fill p-[0px_1.5rem] text-[1rem] font-zcool m-[2px] bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[2rem]">
                                        Generate
                                    </button>
                                </div>
                                <div className="cursor-pointer">
                                    <img
                                        src={copyicon}
                                        width={40}
                                        height={30}
                                        alt="copy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex flex-col items-center bg-transparent">
                        <div className="flex justify-center py-[1rem] w-[50%] relative bg-transparent">
                            <div className="w-[3.175rem] h-[5.006rem] zeroDiv flex flex-col items-center justify-center absolute top-[0.3rem] left-[2rem]">
                                <p className="text-[2.469rem] font-roboto font-bold">
                                    0
                                </p>
                            </div>
                            <div className="w-[3.175rem] h-[5.006rem] zeroDiv flex flex-col items-center justify-center absolute top-[0.3rem] left-[6rem]">
                                <p className="text-[2.469rem] font-roboto font-bold">
                                    0
                                </p>
                            </div>
                            <div className="flex items-center justify-center w-[3.5rem] h-[1.15rem] rounded-[0.323rem] absolute left-[8.2rem] bg-transparent">
                                <span className="text-[4rem] text-red-600 font-roboto font-bold bg-transparent">
                                    :
                                </span>
                            </div>
                            <div className="w-[3.175rem] h-[5.006rem] zeroDiv flex flex-col items-center justify-center absolute top-[0.3rem] left-[11rem]">
                                <p className="text-[2.469rem] font-roboto font-bold">
                                    0
                                </p>
                            </div>
                            <div className="w-[3.175rem] h-[5.006rem] zeroDiv flex flex-col items-center justify-center absolute top-[0.3rem] left-[15rem]">
                                <p className="text-[2.469rem] font-roboto font-bold">
                                    0
                                </p>
                            </div>
                        </div>
                        
                        <div className="w-full presale flex flex-col items-center gap-[1rem] p-[2rem] pt-[5rem] bg-transparent">
                            <p className="font-shojumaru text-[2.4rem] text-red-500 mt-5[rem] bg-transparent">
                                PRESALE 1
                            </p>
                            <p className="font-zcool text-[1rem] bg-transparent">
                                1 Saviour = 0.657 USDT
                            </p>
                            <p className="font-zcool text-[1rem] bg-transparent">
                                Next Stage Price = 0.723 USDT
                            </p>
                            <p className="font-zcool text-[1rem] bg-transparent">
                                Sold - $34,56,56,764/$50,00,00,000
                            </p>
                            <p className="font-zcool text-[1rem] bg-transparent">
                                Raised - $34,56,56,764/$40,00,00,000
                            </p>

                            <div className="flex flex-col gap-[1.2rem] w-[50%] mt-[2rem] ">
                                <input
                                    className="h-[3rem] bg-transparent rounded-[20px] text-[1rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[0px_2.4rem] outline-none bg-transparent"
                                    type="text"
                                    placeholder="Enter the amount (BNB)"
                                />
                                <input
                                    className="h-[3rem] bg-transparent rounded-[20px] text-[1rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[0px_2.4rem] outline-none bg-transparent"
                                    type="text"
                                    placeholder="Minimum Quantity to Buy"
                                />
                                <input
                                    className="h-[3rem] bg-transparent rounded-[20px] text-[1rem] placeholder:text-[#808181] text-white font-zcool border-[1px] border-[#C4110C] p-[0px_2.4rem] outline-none bg-transparent"
                                    type="text"
                                    placeholder="Maximum Quantity of Tokens"
                                />
                            </div>
                            <div className="flex gap-[2rem] justify-center mt-[-1rem]">
                                <button className="bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.3rem] p-[10px] text-[20px] font-zcool text-white shadow-lg mt-[2rem] h-[45px] w-[80px] flex items-center justify-center">
                                    Buy
                                </button>
                                <button className="bg-gradient-to-r from-[#ED0137] to-[#EE6910] rounded-[1.3rem] p-[10px] text-[20px] font-zcool text-white shadow-lg mt-[2rem] h-[45px] w-[200px] flex items-center justify-center">
                                    Claim Drop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IDOEventSection