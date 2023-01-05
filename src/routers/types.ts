import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home2"?: {};
  "/developers"?: {};
  "/nft-detailt"?: {};
  "/page-collection"?: {};
  "/page-search"?: {};
  "/page-author"?: {};
  "/your-wallet"?: {};
  "/page-upload-item"?: {};
  "/home-header-2"?: {};
  "/connect-wallet"?: {};
  "/account"?: {};
  "/blog"?: {};
  "/blog-single"?: {};
  "/about"?: {};
  "/support"?: {};
  "/faq"?: {};
  "/tos"?: {};
  "/privacy"?: {};
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
