import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="mx-auto mt-40 max-w-4xl space-y-4 px-6 text-center text-neutral-700">
        <h1 className="text-2xl font-medium md:text-3xl">Zerodha Products</h1>
        <h2 className="text-md md:text-xl">
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p className="md:text-[16px] text-sm">
          Check out our {" "}
          <Link
            className="font-medium text-[#387ed1] hover:text-neutral-700"
            href="#"
          >
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </p>
      </div>
      <hr className="sm:my-18 mx-auto my-12 w-[90%] border-neutral-200 sm:max-w-5xl md:mt-32" />
    </>
  );
};

export default Hero;
