import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        ImageURL="media/kite.png"
        productName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo "
        link2="Learn more "
        googlePlay="media/googlePlayBadge.svg"
        appStore="media/appstoreBadge.svg"
      />
      <RightSection
        ImageURL="media/console.png"
        productName="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more "
      />
      <LeftSection
        ImageURL="media/coin.png"
        productName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin  "
        link2=""
        googlePlay="media/googlePlayBadge.svg"
        appStore="media/appstoreBadge.svg"
      />
      <RightSection
        ImageURL="media/kiteconnect.svg"
        productName="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect"
      />
      <LeftSection
        ImageURL="media/varsity.png"
        productName="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link2=""
        googlePlay="media/googlePlayBadge.svg"
        appStore="media/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
};

export default ProductPage;
