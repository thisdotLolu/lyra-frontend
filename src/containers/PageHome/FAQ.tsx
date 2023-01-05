import React from "react";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionBecomeAnAuthor from "components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionGridFeatureNFT2 from "./SectionGridFeatureNFT2";
import SectionMagazine8 from "components/SectionMagazine8";
import SectionSliderCardNftVideo from "components/SectionSliderCardNftVideo";
import DeveloperHero from "components/SectionHero/DeveloperHero";
import SectionSliderCollections from "components/SectionSliderCollections";

function FAQ() {
  return (
    <div className="nc-FAQ relative overflow-hidden">
      <div className="container px-4">
        {/* SECTION HERO */}
        <h1>FAQ</h1>
      </div>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
        <h2>Frequently Asked Questions</h2>
	<ul>
	    <li><b>What are GitNFT's?</b></li>
            <li>A GitNFT is a block of partially encrypted metadata on a blockchain such as
		Ethereum, proving the ownership over a Github.com repository or a stake in it.
	   	GitNFT's can be funded in full or acquired, at the moment. Time-based auctions,
                bids and partial funding such as obvious features on other NFT platforms will
 		be implemented in the future. 
		<br /><br/><hr /><br /><br />
            </li>
	</ul>
	<ul>
	    <li><b>Sign up &amp; Registration?</b></li>
            <li>The Sign up is free and grants you Free access to browse Public GitNFT's.
		In order to create a repository or import one from Github.com, receive or
		transfer funding, sell a repo or withdraw, you need to become a VIP or
		Verified Account. While VIP account solely demands a $5 payment
		and no further personal identification, the LyraGit Verified account
		requires extensive authentication and $10 (Developer) / $1000 (Investor)
		credit. This is for everybody's security on the platform.
		<br /><br/><hr /><br /><br />
            </li>
	</ul>
	<ul>
	    <li><b>Browsing GitNFT's</b></li>
	    <li>
		Developers/Engineers who present their work on LyraGIT have either
		striked a deal with an investor or corporate entity upfront, or
		have intentionally developed a codebase (a repository) for the purpose
		of ethical financial gain and monetary incentive for the work to be
		rewarded. The collections of LyraGIT repositories were specifically
		chosen for maximizing investors and product development managers interest.
		<br /><br/><hr /><br /><br />
            </li>
	</ul>
	<ul>
	    <li><b>The funding process</b></li>
            <li>Is is very straight forward. People who are very hard to meet in real life,
		except for specific occasions or while being part of restrictive social 
		circles, use the web site just like developers do, and transfer funds to
		serverside LyraGIT wallets, created for you upon signup, to either acquire
		or fund, your GitNFT. Upon receiving Verified status, via Personal Data
		upload and a very small payment, Developers can retrieve those funds.
		The site comission / transaction fee is currently 2%. The payment grants
		either a percentage stake in all further development, a convertible note,
		to the investor or renderd a full Intellectual property purchase. 
		<br /><br/><hr /><br /><br />
            </li>
	</ul>
	<ul>
	    <li><b>The withdrawal process</b></li>
            <li>We have no interest nor legal position to store your funds for long
		nor to act as bank or Cryptocurrency Exchange, at the moment. As soon
		as your identity is verified, your account legitimated, you can either
		connect a Wallet by Browser (we recommend Coinbase Wallet, it supports
		ERC-20 tokens and NFT's, and is not coupled to Coinbase; meaning the 
		Private Key is stored inside the Wallet app / Browser Extension) or
		your Mobile; or Define an Etherem Wallet address which we UniSwap
		JSONRPC your funds to. We won't pay the gas. We are working on running
		our own Ethereum nodes.
		<br /><br/><hr /><br /><br />
            </li>
	</ul>
	<ul>
	    <li><b>Purchase and Sale</b></li>
	    <li>There is another format of monetary incentive and capitalization
		as to GitNFT's, which we predict will be the preferred method
		by Angel Investors (who might hire the owner of a repository though)
		and mostly importantly, Corporations: Full IP Purchase. This is similiar
		to a Grant with Milestone Deliverables. You work your *** off up front,
		but knowing what you're doing, and which industry you're doing it for,
		you can be assured of at least proper payment. 
		<br /><br/><hr /><br /><br />
            </li>
	</ul>





	</div>
      </div>
    </div>
  );
}

export default FAQ;
