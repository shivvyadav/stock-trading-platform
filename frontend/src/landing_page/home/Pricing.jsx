import React from "react";

const Pricing = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 pt-16 sm:flex-row sm:pt-36">
      <div className="max-w-md px-6">
        <h1 className="mb-6 text-lg font-medium text-neutral-700 sm:text-2xl">
          Unbeatable pricing
        </h1>
        <p className="mb-4 text-[15px] leading-6 text-neutral-600">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <a className="text-[#387ed1] hover:text-neutral-700" href="">
          see pricing <span>→</span>
        </a>
      </div>
      <div className="mx-6 flex gap-4 border-2 border-neutral-200 bg-neutral-50 px-6 py-6 text-center">
        <div className="w-[50%]">
          <h1 className="text-2xl font-medium sm:text-4xl sm:font-semibold">
            ₹0
          </h1>
          <p className="pt-6 text-[12px] sm:text-[14px]">
            Free equity delivery and  direct mutual funds
          </p>
        </div>
        <div className="w-[50%] border-l-2 border-neutral-200 pl-2">
          <h1 className="text-2xl font-medium sm:text-4xl sm:font-semibold">
            ₹20
          </h1>
          <p className="pt-6 text-[12px] sm:text-[14px]"> Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
