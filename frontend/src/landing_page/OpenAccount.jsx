import React from "react";

const OpenAccount = () => {
  return (
    <div className="mt-18 flex flex-col items-center justify-center p-8 text-center">
      <h1 className="pt-8 text-xl font-medium text-neutral-700 sm:text-2xl">
        Open a Zerodha account
      </h1>
      <p className="pt-6 text-sm text-neutral-500 md:text-[16px]">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button className="text-md hover:scale-102 mt-8 cursor-pointer rounded-sm bg-[#387ed1] px-8 py-2 text-white shadow-xl transition-transform duration-300 hover:bg-neutral-900 hover:opacity-90 sm:text-xl">
        Sign up for free
      </button>
    </div>
  );
};

export default OpenAccount;
