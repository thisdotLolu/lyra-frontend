import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
import twitter from "images/socials/twitter.svg";
import github from "images/socials/github.svg";

export interface SocialsList1Props {
  className?: string;
}

const socials: SocialType[] = [
  { name: "Github", icon: github, href: "https://github.com/lyragit" },
  { name: "Twitter", icon: twitter, href: "https://twitter.com/lyragit" },
];

const SocialsList1: FC<SocialsList1Props> = ({ className = "space-y-3" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
        key={index}
      >
        <div className="flex-shrink-0 w-5 ">
          <img src={item.icon} alt="" />
        </div>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socials.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
