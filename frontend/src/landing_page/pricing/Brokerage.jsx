import React from "react";

const Brokerage = () => {
  const lists = [
    "Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order",
    "Digital contract notes will be sent via e-mail",
    "Physical copies of contract notes, if required, shall be charged per contract note. Courier charges apply. ₹20",
    "For NRI account (non-PIS), 0.5% or ₹100 per executed order for equality (whichever is lower).",
    "For NRI account (PIS), 0.5% or ₹200 per executed order for intraday (whichever is lower)",
    "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order",
  ];
  return (
    <>
      <hr className="mx-auto mb-12 mt-8 w-[90%] border-neutral-200 sm:max-w-6xl" />
      <div className="mx-auto flex flex-col items-start px-6 md:flex-row md:px-16">
        <div className="flex max-w-6xl flex-col items-start gap-6 px-6 sm:gap-8 md:mb-4 md:ml-32">
          <h3 className="text-center text-xl font-medium text-sky-700 md:ml-32">
            Brokerage calculator
          </h3>
          <ul>
            {lists.map((list, index) => (
              <li
                key={index}
                className="mb-4 list-disc text-sm text-neutral-500 md:text-[14px]"
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-2 text-sky-700 md:ml-24">List of charges</div>
      </div>
    </>
  );
};

export default Brokerage;
