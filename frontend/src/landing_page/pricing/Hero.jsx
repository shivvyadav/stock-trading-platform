import React from "react";

const Hero = () => {
  const pricingDetails = [
    {
      image: "media/pricingZero.svg",
      title: "Free equity delivery",
      description:
        "All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.",
    },
    {
      image: "media/pricingTwenty.svg",
      title: "Intraday and F&O trades",
      description:
        "Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.",
    },
    {
      image: "media/pricingZero.svg",
      title: "Free direct MF",
      description:
        "All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.",
    },
  ];

  return (
    <>
      <div className="mt-40 space-y-4 text-center">
        <h1 className="text-3xl font-medium text-neutral-700">Charges</h1>
        <p className="text-md tracking-wide text-neutral-400 md:text-xl">
          List of all charges and taxes
        </p>
      </div>
      <hr className="mx-auto mt-12 w-[90%] border-neutral-200 sm:max-w-6xl md:mt-24" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-6 px-6 sm:flex-row md:gap-16">
        {pricingDetails.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center md:gap-4 lg:mt-14"
          >
            <img src={detail.image} alt="Pricing Image" className="size-52" />

            <div className="flex max-w-sm flex-col items-center justify-center text-center md:gap-4">
              <h1 className="text-xl md:text-2xl font-medium text-neutral-700 sm:text-3xl">
                {detail.title}
              </h1>
              <p className="text-sm md:text-md mt-4 leading-7 tracking-wide text-neutral-500">
                {detail.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
