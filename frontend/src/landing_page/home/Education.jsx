import React from "react";

const Education = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-around gap-28 pt-36 md:flex-row">
      <div className="max-w-sm md:max-w-sm lg:max-w-md px-6">
        <img src="media/education.svg" alt="Largest Broker Image" />
      </div>

      <div className="flex max-w-4xl flex-1 flex-col px-6">
        <h1 className="text-lg font-medium text-neutral-700 md:text-xl lg:text-2xl">
          Free and open market education
        </h1>
        <div className="md:text-[14px] lg:text-[16px] xl:text-xl">
          <p className="pb-3 pt-6 text-sm leading-7 text-neutral-700">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a className="text-blue-600 hover:text-neutral-700" href="">
            Varsity <span>→</span>
          </a>
        </div>
        <div className="md:text-[14px] lg:text-[16px] xl:text-xl">
          <p className="pb-3 pt-8 text-sm leading-7 text-neutral-700">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="text-blue-600 hover:text-neutral-700" href="">
            TradingQ&A <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
