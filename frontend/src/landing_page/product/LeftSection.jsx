import React from "react";

const LeftSection = ({
  ImageURL,
  productName,
  description,
  link1,
  link2,
  googlePlay,
  appStore,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-24 px-6 md:flex-row">
        <div className="w-52 sm:w-72 md:w-96 lg:w-[36rem]">
          <img src={ImageURL} alt={productName} />
        </div>
        <div className="relative xl:-right-12 flex max-w-xs flex-col gap-6 text-justify">
          <h1 className="text-2xl font-medium text-neutral-700">
            {productName}
          </h1>
          <p className="text-sm tracking-tight text-neutral-600 md:text-base">
            {description}
          </p>
          <div className="space-x-16 font-medium">
            {link1 && (
              <a className="text-[#387ed1] hover:text-neutral-700" href="#">
                {link1}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
            {link2 && (
              <a className="text-[#387ed1] hover:text-neutral-700" href="#">
                {link2}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
          <div className="flex gap-4">
            <img src={googlePlay} alt="googlePlay" />
            <img src={appStore} alt="appStore" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
