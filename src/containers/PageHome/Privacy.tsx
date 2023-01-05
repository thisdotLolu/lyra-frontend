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

function Privacy() {
  return (
    <div className="nc-Privacy relative overflow-hidden">
      <div className="container px-4">
        {/* SECTION HERO */}
        <h1>Privacy policy</h1>
      </div>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
        <h2>What is privacy and what are we doing to implement it on this platform / website</h2>
	<p>We have made significant considerations going into this document, and eventually
	  even reviewed the Privacy page of Twitter. This was an enlightening discovery,
	  indeed. As it seems, there are no rules written for Privacy pages, and we think
	  truth is best, even if it means legal nonsense to arise. There is 2 things which
	  matter on this website. Personal data, and Financial records. <br /> <br />

	  We are conducting, will conduct, or at least are working on, thorough Xray of your
	  Browser, CPU, Phone, GPU, Laptop by means of Microarchitectural Fingerprinting and 
	  Partial DOM Extraction and transfer, for the simple reason of not invading your
	  privacy, and not letting bots or automated attack frameworks, even guided and lead
	  by Artifical Intelligence driven Browsers simulating Mouse Movemenets and Javascript
	  events, compromize it / the security of this platform. We anonymize the Bot detection
	  in case so called signs of Humanness overweigh the Bot detection metrics, still 
	  machine learn that, yet, in case we detect a bot, we link the detection analytics
	  to that unique device AND IP Address. We are able to fingerprint a unique device
	  by the means of unique bits, and that accounts to even Tor Browser or Brave Browser.

	  But this shouldn't be your main concern. As to the storage of your personal data
	  and financial records on Blockchain, you should be very clear about the fact that
	  Ethereum Transactions (e.g.) are public and traceable. Just because someone can't
	  stop you from conducting a cryptographically assured transfer, doesn't mean they
	  can't observe you. For that matter, we store the addresses used by your wallet for
	  a banking default of 10 years, but nothing more. We will advise with our attorneys,
	  but probably we will have to store the full personal data behind the wallets for
	  a maximum of 10 years. 

	  For what it is worth, it is stored AES 256 encrypted with a key generated discreetly
	  either in your browser or on high security infrastructure, for personal information.
	  We are working on the Profile piece of the platform, still. 

          Very best,
          LyraGit, Dan Zulla, Chief Security 
	  </p>

	
	</div>
      </div>
    </div>
  );
}

export default Privacy;
