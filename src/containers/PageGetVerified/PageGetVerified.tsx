import React, { FC } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";

export interface PageGetVerifiedProps {
  className?: string;
}

const PageGetVerified: FC<PageGetVerifiedProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageGetVerified  ${className}`} data-nc-id="PageGetVerified">
      <Helmet>
        <title>Verified || LyraGIT - Angel Investing in GitNFTs</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
         Become VERIFIED 
        </h2>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              Become a KYC Verified Engineer/Investor
              <br />
              <br />
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Full name
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Full Address
              </span>
              <Input type="text" className="mt-1" />
            </label>
           <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Passport No
              </span>
              <Input type="text" className="mt-1" />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Optional: Company name
              </span>
              <Input type="text" className="mt-1" />
            </label>
           

 
	   <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Passport photo
	      </span>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
            <div>
              <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                OGG, GLB, GLTF. Max size: 100 MB
              </span>
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <div className="flex text-center mx-auto text-sm text-neutral-6000 dark:text-neutral-300">
                      <label
                        htmlFor="file-upload"
                        className="text-center relative items-center cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"            
                          type="file"
                          className="sr-only"
                        />
                        <p className="pl-1">or drag and drop</p>
                        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                          PNG, JPG, GIF up to 10MB
                        </p>
		      </label>
	            </div>
	    	  </div>
</div>
</div>
</label>
	   <ButtonPrimary type="submit">Continue</ButtonPrimary>

          </form>

          {/* ==== */}
        </div>
    </div>
  );
};

export default PageGetVerified;
