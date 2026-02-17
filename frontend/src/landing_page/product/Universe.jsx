import React from "react";

const Universe = () => {
  const universe = [
    {
      image: "media/zerodhaFundhouse.png",
      alt: "Zerodha Fundhouse",
      p1: "Our asset management venture",
      p2: "that is creating simple and transparent index",
      p3: "funds to help you save for your goals.",
    },
    {
      image: "media/sensibullLogo.svg",
      alt: "Sensibull",
      p1: "Options trading platform that lets you",
      p2: "create strategies, analyze positions, and examine",
      p3: "data points like open interest, FII/DII, and more.",
    },
    {
      image: "media/tijori.svg",
      alt: "Tijori ",
      p1: "Investment research platform",
      p2: "that offers detailed insights on stocks,",
      p3: "sectors, supply chains, and more.",
    },
    {
      image: "media/streakLogo.png",
      alt: "Streak",
      p1: "Systematic trading platform",
      p2: "that allows you to create and backtest",
      p3: "strategies without coding.",
    },
    {
      image: "media/smallcaseLogo.png",
      alt: "Smallcase",
      p1: "Thematic investing platform",
      p2: "that helps you invest in diversified",
      p3: "baskets of stocks on ETFs.",
    },
    {
      image: "media/dittoLogo.png",
      alt: "Ditto",
      p1: "Personalized advice on life",
      p2: "and health insurance. No spam",
      p3: "and no mis-selling.",
    },
  ];

  return (
    <>
      <div className="mx-auto mt-40 max-w-4xl space-y-6 px-6 text-center text-neutral-700">
        <h1 className="text-xl font-medium md:text-2xl">
          The Zerodha Universe
        </h1>
        <p className="text-sm md:text-base">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="mx-auto my-2 grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {universe.map((item, index) => (
          <div
            key={index}
            className="mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center space-y-4 text-center text-xs font-medium text-neutral-400"
          >
            <div className="flex flex-col items-center space-y-1">
              <img src={item.image} alt={item.alt} className="mb-6 w-44" />
              <p>{item.p1}</p>
              <p>{item.p2}</p>
              <p>{item.p3}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-18 mx-auto max-w-xl px-6 text-center">
        <button className="text-md hover:scale-102 mx-auto mt-8 cursor-pointer rounded-sm bg-[#387ed1] px-8 py-2 text-white shadow-lg transition-transform duration-300 hover:bg-neutral-900 hover:opacity-90 sm:text-xl">
          Sign up for free
        </button>
      </div>
    </>
  );
};

export default Universe;
