import React from "react";

const RightSection = ({ ImageURL, productName, description, link1 }) => {
  return (
    <>
      <div className="my-24 flex flex-col items-center justify-evenly gap-24 px-6 lg:pr-24 md:flex-row">
        <div className="relative xl:-right-16 flex max-w-xs flex-col gap-6 text-justify">
          <h1 className="text-2xl font-medium text-neutral-700">
            {productName}
          </h1>
          <p className="text-sm tracking-tight text-neutral-600 md:text-base leading-7">
            {description}
          </p>
          <div className="space-x-16 font-medium">
            {link1 && (
              <a className="text-[#387ed1] hover:text-neutral-700" href="#">
                {link1}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
        <div className="w-52 sm:w-72 md:w-96 lg:w-[39rem]">
          <img src={ImageURL} alt={productName} />
        </div>
      </div>
    </>
  );
};

export default RightSection;
