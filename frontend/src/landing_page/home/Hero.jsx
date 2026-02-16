import React from "react";

const Hero = () => {
  return (
    <div className="mt-26 flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 max-w-4xl">
        <img
          className="max-h-88 w-full"
          src="media/homeHero.png"
          alt="Hero Image"
        />
      </div>
      <h1 className="pt-6 text-xl font-medium text-neutral-700 sm:text-3xl">
        Invest in everything
      </h1>
      <p className="pt-4 text-sm text-neutral-600 md:text-[18px]">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>
      <button className="text-md hover:scale-102 mt-8 cursor-pointer rounded-sm bg-[#387ed1] px-8 py-2 text-white shadow-xl transition-transform duration-300 hover:bg-neutral-900 hover:opacity-90 sm:text-xl">
        Sign up for free
      </button>
    </div>
  );
};

export default Hero;
