import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import imagePng from "images/hero3.png";
import HeroSearchForm from "components/HeroSearchForm/HeroSearchForm";

export interface DeveloperProps {
  className?: string;
}

const Developer: FC<DeveloperProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-Developer relative ${className}`}
      data-nc-id="Developer"
    >
      <div className="mt-10 lg:mt-0 lg:absolute lg:container z-10 inset-x-0 top-[10%] sm:top-[20%]">
        <div className="flex flex-col items-start max-w-2xl space-y-5 xl:space-y-8 ">
          <span className="text-white sm:text-lg md:text-xl font-semibold text-neutral-900">
            Contribute to the funding & monetarization of code
	  </span>
          <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
            LyraGit CLI
          </h2>
          <ButtonPrimary
            sizeClass="px-6 py-3 lg:px-8 lg:py-4"
            fontSize="text-sm sm:text-base lg:text-lg font-medium"
          >
            Launch LyraGit CLI
          </ButtonPrimary>
          <br />
        </div>
      </div>
      <div className="relative aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9">
        <img
          className="absolute inset-0 object-cover rounded-[32px]"
          src={imagePng}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Developer;
