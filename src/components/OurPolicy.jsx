import React from "react";
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 ">
      <div>
        <RiExchangeFundsLine className="w-12 m-auto mb-5 size-20" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <MdHighQuality className="w-12 m-auto mb-5 size-20" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div>
        <MdSupportAgent className="w-12 m-auto mb-5 size-20" />
        <p className="font-semibold">Best customer support </p>
        <p className="text-gray-400">We provide 27/7 customer support policy</p>
      </div>
    </div>
  );
}

export default OurPolicy;
