import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import Education from "./Education";
import Award from "./Award";
import Pricing from "./Pricing";

import OpenAccount from "../OpenAccount";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
};

export default HomePage;
