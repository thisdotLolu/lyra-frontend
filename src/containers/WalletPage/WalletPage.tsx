import React, { useState, useEffect } from "react";
import { FC, Fragment } from "react";
import { Helmet } from "react-helmet";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import NcImage from "shared/NcImage/NcImage";
import CardNFT from "components/CardNFT";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import authorBanner from "images/nfts/authorBanner.png";
import { nftsImgs } from "contains/fakeData";
import WalletMoreDropdown from "components/WalletMoreDropdown";
import ButtonDropDownShare from "components/ButtonDropDownShare";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SocialsList from "shared/SocialsList/SocialsList";
import WithdrawButton from "components/WithdrawButton";
import FundButton from "components/FundButton";
import VerifyIcon from "components/VerifyIcon";
import { Tab } from "@headlessui/react";
import CardAuthorBox3 from "components/CardAuthorBox3/CardAuthorBox3";
import ArchiveFilterListBox from "components/ArchiveFilterListBox";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import { supabase } from "../../client";
import { User, UserResponse } from "@supabase/gotrue-js/src/lib/types"

export interface WalletPageProps {
  className?: string;
}

const WalletPage: FC<WalletPageProps> = ({ className = "" }) => {
  let [categories] = useState([
    "Cryptocurrencies",
    "GitNFTs",
  ]);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if(user === null) {
      getProfile();
    }

  }, [user]);

  async function getProfile(){
      const { data: { user } } = await supabase.auth.getUser();

      if(user) {
        setUser(user);
        console.log(user);
      }
  }

  async function signIn(){
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        scopes: 'user:email,read:project,read:user'
      }
    });

    // TODO: store access token

  }

  getProfile();

  return user? (
    <div className={`nc-WalletPage  ${className}`} data-nc-id="WalletPage">
      <Helmet>
        <title>Wallet || LyraGIT - Angel Investing in GitNFTs</title>
      </Helmet>

      {/* HEADER */}
      <div className="w-full">
        <div className="relative w-full h-40 md:h-60 2xl:h-72">
          <NcImage
            containerClassName="absolute inset-0"
            src={authorBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container -mt-10 lg:-mt-16">
          <div className="relative bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-8 rounded-3xl md:rounded-[40px] shadow-xl flex flex-col md:flex-row">
            <div className="w-32 lg:w-44 flex-shrink-0 mt-12 sm:mt-0">
              <NcImage
                src={user.user_metadata.avatar_url}
                containerClassName="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden"
              />
            </div>
            <div className="pt-5 md:pt-1 md:ml-6 xl:ml-14 flex-grow">
              <div className="max-w-screen-sm ">
                <h2 className="inline-flex items-center text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <span>Your Wallet: @{ user.user_metadata.preferred_username }</span>
                </h2>
                <div className="flex items-center text-sm font-medium space-x-2.5 mt-2.5 text-green-600 cursor-pointer">
                  <span className="text-neutral-700 dark:text-neutral-300">
                    4.0xc4c16ac453sa645a...b21a{" "}
                  </span>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M18.05 9.19992L17.2333 12.6833C16.5333 15.6916 15.15 16.9083 12.55 16.6583C12.1333 16.6249 11.6833 16.5499 11.2 16.4333L9.79999 16.0999C6.32499 15.2749 5.24999 13.5583 6.06665 10.0749L6.88332 6.58326C7.04999 5.87492 7.24999 5.25826 7.49999 4.74992C8.47499 2.73326 10.1333 2.19159 12.9167 2.84993L14.3083 3.17493C17.8 3.99159 18.8667 5.71659 18.05 9.19992Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5498 16.6583C12.0331 17.0083 11.3831 17.3 10.5915 17.5583L9.2748 17.9917C5.96646 19.0583 4.2248 18.1667 3.1498 14.8583L2.08313 11.5667C1.01646 8.25833 1.8998 6.50833 5.20813 5.44167L6.5248 5.00833C6.86646 4.9 7.19146 4.80833 7.4998 4.75C7.2498 5.25833 7.0498 5.875 6.88313 6.58333L6.06646 10.075C5.2498 13.5583 6.3248 15.275 9.7998 16.1L11.1998 16.4333C11.6831 16.55 12.1331 16.625 12.5498 16.6583Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <span className="block mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                This is your official LyraGIT wallet containing your cryptocurrencies and GitNFT's. It is the serverside wallet, not your clientside private wallet. To Withdraw, you will need Verified status. This is $USD 10 for Developers/Engineers and $USD 1000 for Corporate/Investor accounts. 
 		</span>
              </div>
            </div>
            <div className="absolute md:static left-5 top-4 sm:left-auto sm:top-5 sm:right-5 flex flex-row-reverse justify-end">
              <WalletMoreDropdown
                actions={[
                  {
                    id: "regenerate",
                    name: "Regenerate Wallet",
                    icon: "las la-flag",
                  },
                ]}
                containerClassName="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:bg-neutral-800 cursor-pointer"
              />
	      <FundButton
                fontSize="text-sm md:text-base font-medium"
                sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
              />

              <WithdrawButton
                isVerified={true}
                fontSize="text-sm md:text-base font-medium"
                sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          <Tab.Group>
            <div className="flex flex-col lg:flex-row justify-between ">
              <Tab.List className="flex space-x-0 sm:space-x-2 overflow-x-auto ">
                {categories.map((item) => (
                  <Tab key={item} as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={`flex-shrink-0 block font-medium px-4 py-2 text-sm sm:px-6 sm:py-2.5 capitalize rounded-full focus:outline-none ${
                          selected
                            ? "bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900"
                            : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100/70 dark:hover:bg-neutral-800"
                        } `}
                      >
                        {item}
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <div className="mt-5 lg:mt-0 flex items-end justify-end">
                <ArchiveFilterListBox />
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel className="">
                {/* LOOP ITEMS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                  {Array.from("11111111").map((_, index) => (
                    <CardNFT key={index} />
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                  <Pagination />
                  <ButtonPrimary loading>Show me more</ButtonPrimary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                {/* LOOP ITEMS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                  {Array.from("11111111").map((_, index) => (
                    <CardNFT key={index} />
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                  <Pagination />
                  <ButtonPrimary loading>Show me more</ButtonPrimary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                {/* LOOP ITEMS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
                  {Array.from("11111111").map((_, index) => (
                    <CardNFT isLiked key={index} />
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                  <Pagination />
                  <ButtonPrimary loading>Show me more</ButtonPrimary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                {/* LOOP ITEMS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 lg:mt-10">
                  {Array.from("11111111").map((_, index) => (
                    <CardAuthorBox3 following key={index} />
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                  <Pagination />
                  <ButtonPrimary loading>Show me more</ButtonPrimary>
                </div>
              </Tab.Panel>
              <Tab.Panel className="">
                {/* LOOP ITEMS */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                  {Array.from("11111111").map((_, index) => (
                    <CardAuthorBox3 following={false} key={index} />
                  ))}
                </div>

                {/* PAGINATION */}
                <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                  <Pagination />
                  <ButtonPrimary loading>Show me more</ButtonPrimary>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </main>

      </div>
    </div>
  ) : (
  <div>
  No wallet or user found
  </div>
  );
};

export default WalletPage;
