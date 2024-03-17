import React, { useState } from "react";
import { dropdown, uparrow } from "../assets";
const FAQCard = ({ text, number }) => {
  const [flag, setFlag] = useState(false);

  const handleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="border-2 border-[#ED0137] rounded-md ">
      <div className="px-10 py-2 w-full md:w-[540px] h-auto md:h-[77px] flex items-center justify-between gap-3 ">
        <p className="font-shojumaru">{number}</p>
        <p className="font-shojumaru"> {text}</p>
        {flag ? (
          <img src={dropdown} alt="" onClick={handleFlag}  />
        ) : (
          <img src={uparrow} alt="" onClick={handleFlag}  />
        )}
      </div>
      {flag ? (
        <div className="rounded-md bg-[#101010] text-sm md:text-base font-zcool font-light w-full md:w-[90%] m-auto p-3 my-3">
          <p className="bg-[#101010] text-[12px] font-ZCOOL-KuaiLe">
            After the IDO concludes, you can claim the tokens on our official
            website.
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FAQCard;
