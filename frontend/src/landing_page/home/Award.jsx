import React from "react";

const Award = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-16 px-6 pt-32 text-center sm:justify-between sm:text-center md:flex-row">
      <div className="max-w-lg">
        <img src="media/largestBroker.svg" alt="Largest Broker Image" />
      </div>

      <div className="flex max-w-3xl flex-col px-2 md:text-left">
        <h1 className="text-2xl font-medium text-neutral-700 sm:text-3xl">
          Largest stock broker
        </h1>
        <p className="max-w-md pt-4 text-sm text-neutral-700 sm:text-[16px]">
          2+ million clients contribute to over 15% of all retail order volumes
          daily by trading and investing in:
        </p>
        <div className="mt-4 grid grid-cols-2 gap-8 py-4 text-center text-xs text-neutral-500 sm:text-[15px] md:text-left">
          <div>
            <ul>
              <li className="mb-4">Futures and Options</li>
              <li className="mb-4">Commodity derivatives</li>
              <li className="mb-4">Currency derivatives</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-4">Futures and Options</li>
              <li className="mb-4">Commodity derivatives</li>
              <li className="mb-4">Currency derivatives</li>
            </ul>
          </div>
        </div>
        <img className="w-sm mt-8" src="media/pressLogos.png" alt="" />
      </div>
    </div>
  );
};

export default Award;
