import { SocialType } from "shared/SocialsShare/SocialsShare";
import React, { FC } from "react";
import twitter from "images/socials/twitter.svg";
import github from "images/socials/github.svg";
//import signal from "images/socials/signal.svg";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  { name: "Github", icon: github, href: "https://github.com/lyragit" },
  { name: "Twitter", icon: twitter, href: "https://twitter.com/lyragit" },
  //{ name: "Signal", icon: signal, href: "signal:+4915128068877" },
];

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "block w-6 h-6",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 text-2xl text-neutral-6000 dark:text-neutral-300 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <img src={item.icon} alt="" />
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
