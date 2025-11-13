import React from "react";
import Profile from "./profile";

const Team = () => {
  return (
    <>
      <h2 className="mb-12 text-center text-2xl font-medium text-neutral-700">
        People
      </h2>
      <div className="flex flex-col items-center justify-center space-x-10 px-6 md:flex-row md:items-start">
        <Profile
          Image="media/nithinKamath.jpg"
          Name="Nithin Kamath"
          Position="Founder, CEO"
          Bio=""
        />
        <div className="max-w-sm space-y-4 px-6 py-6 text-justify text-sm text-neutral-700 md:text-[14px] md:leading-6 lg:max-w-xl lg:text-base lg:leading-7">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a className="text-[#387ed1] hover:text-neutral-700" href="#">
              Rainmatter
            </a>{" "}
            /{" "}
            <a className="text-[#387ed1] hover:text-neutral-700" href="#">
              TradingQnA
            </a>{" "}
            /{" "}
            <a className="text-[#387ed1] hover:text-neutral-700" href="#">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Team;
