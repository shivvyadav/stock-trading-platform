import React from "react";

const Hero = () => {
  return (
    <>
      <div className="mx-auto mt-40 max-w-4xl space-y-1 text-center text-sm font-medium text-neutral-700 md:text-2xl">
        <h1>We pioneered the discount broking model in India.</h1>
        <h1>Now, we are breaking ground with our technology.</h1>
      </div>
      <hr className="sm:my-18 mx-auto my-12 w-[90%] border-neutral-200 sm:max-w-6xl md:my-24" />
      {/* team */}
      <div className="md:text-md mx-auto grid max-w-4xl grid-cols-1 gap-10 px-8 text-justify text-sm leading-7 text-neutral-700 sm:max-w-4xl md:grid-cols-2 lg:text-base">
        <div className="space-y-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="space-y-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a className="text-[#387ed1] hover:text-neutral-700" href="#">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
      <hr className="mx-auto my-12 w-[90%] border-neutral-200 sm:my-8 sm:max-w-6xl md:my-12" />
    </>
  );
};

export default Hero;
