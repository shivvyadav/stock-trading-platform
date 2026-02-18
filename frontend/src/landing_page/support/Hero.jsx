import React from "react";

const Hero = () => {
  return (
    <>
      <div className="my-16 flex flex-col justify-center gap-8 bg-sky-600 px-8 pb-16 pt-12 text-white md:grid-cols-2 md:flex-row">
        <div className="flex max-w-md flex-col gap-12">
          <h3 className="text-lg">Support portal</h3>
          <div className="flex flex-col gap-6">
            <h1 className="text-justify text-lg font-medium md:text-xl">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg: how to activate F&O, why is my order getting rejected."
              className="w-full rounded-md border-0 bg-white px-3 py-2.5 text-black shadow-sm outline-none placeholder:text-gray-400 md:px-4 md:py-4 md:placeholder:text-[14px] placeholder:text-[12px]"
            />
            <div className="space-x-4 text-[13px] leading-7 underline underline-offset-2 lg:text-[14px]">
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
          </div>
        </div>
        <div className="flex max-w-sm flex-col gap-8 lg:ml-12 lg:gap-12">
          <h3 className="underline underline-offset-2 lg:text-right">
            <a href="">Track Tickets</a>
          </h3>
          <div className="lg:pl-12">
            <h1 className="font-medium tracking-wide lg:text-xl">Featured</h1>
            <div className="mt-4 flex flex-col gap-2 text-[13px] lg:text-[14px]">
              <a href="">1. Current Takeovers and Delisting-January 2025</a>
              <a href="">2. Latest Intraday leverages - MIS & CO</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
