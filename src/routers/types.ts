import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home2"?: {};
  "/developers"?: {};
  "/cli"?: {};
  "/privacy"?: {};
  "/faq"?: {};
  "/faq/:page"?: {};
  "/tos"?: {};
  "/nft-detailt"?: {};
  "/page-collection"?: {};
  "/page-search"?: {};
  "/page-author"?: {};
  "/my-wallet"?: {};
  "/my-gitnft"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  "/account"?: {};
  "/blog"?: {};
  "/blog-single"?: {};
  "/about"?: {};
  "/support"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/get-verified"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType<Object>;
}
