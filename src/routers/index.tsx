import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import AuthorPage from "containers/AuthorPage/AuthorPage";
import WalletPage from "containers/WalletPage/WalletPage";
import AccountPage from "containers/AccountPage/AccountPage";
import PageContact from "containers/PageContact/PageContact";
import PageAbout from "containers/PageAbout/PageAbout";
import PageSupport from "containers/PageSupport/PageSupport";
import PageSignUp from "containers/PageSignUp/PageSignUp";
import PageGetVerified from "containers/PageGetVerified/PageGetVerified";
import PageLogin from "containers/PageLogin/PageLogin";
import PageSubcription from "containers/PageSubcription/PageSubcription";
import BlogPage from "containers/BlogPage/BlogPage";
import BlogSingle from "containers/BlogPage/BlogSingle";
import SiteHeader from "containers/SiteHeader";
import NftDetailPage from "containers/NftDetailPage/NftDetailPage";
import PageCollection from "containers/PageCollection";
import PageSearch from "containers/PageSearch";
import PageUploadItem from "containers/PageUploadItem";
import PageConnectWallet from "containers/PageConnectWallet";
import PageHome2 from "containers/PageHome/PageHome2";
import Developers from "containers/PageHome/Developers";
import CLI from "containers/PageHome/CLI";
import FAQ from "containers/PageHome/FAQ";
import Privacy from "containers/PageHome/Privacy";
import TOS from "containers/PageHome/TOS";

export const pages: Page[] = [
  { path: "/", component: PageHome2 },
  { path: "/#", component: PageHome2 },
  { path: "/home2", component: PageHome },
  { path: "/developers", component: Developers },
  { path: "/cli", component: CLI },
  { path: "/faq", component: FAQ },
  { path: "/faq/:page", component: FAQ },
  { path: "/privacy", component: Privacy },
  { path: "/tos", component: TOS },
  { path: "/home-header-2", component: PageHome },
  { path: "/nft-detailt", component: NftDetailPage },
  { path: "/page-collection", component: PageCollection },
  { path: "/page-search", component: PageSearch },
  { path: "/page-author", component: AuthorPage },
  { path: "/my-wallet", component: WalletPage },
  { path: "/account", component: AccountPage },
  { path: "/my-gitnft", component: PageUploadItem },
  { path: "/connect-wallet", component: PageConnectWallet },
  { path: "/blog", component: BlogPage },
  { path: "/blog-single", component: BlogSingle },
  { path: "/contact", component: PageContact },
  { path: "/about", component: PageAbout },
  { path: "/support", component: PageSupport },
  { path: "/signup", component: PageSignUp },
  { path: "/get-verified", component: PageGetVerified },
  { path: "/login", component: PageLogin },
  { path: "/subscription", component: PageSubcription },
];

const MyRoutes = () => {
  return (
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "" : ""}
    >
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
        <Route element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
