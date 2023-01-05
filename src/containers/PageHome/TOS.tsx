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

function TOS() {
  return (
    <div className="nc-TOS relative overflow-hidden">
      <div className="container px-4">
        {/* SECTION HERO */}
        <h1>Terms of service</h1>
      </div>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
        <h2>Terms of use</h2>
	<ul>
    	   <li><b>Uptime</b></li>
    	   <li>We gurantee availability of our services through a global distributed high-availability network. In case of global catastrophe, like a world war, with nuclear impact, or a comet, it is possible that a global outage of our services occurs and you can not access your funds upon arrival. In any other case, the services in at least 1-2 national territories will be online, so will be parts of the Ethereum Blockchain.<br /><br /><hr /><br /><br /></li>
    	   <li><b>Security</b></li>
	   <li>Mistakes happen. We use our best knowledge and conscience while architecting and
	       coding, configuring and reviewing; we use OpenAI GPT3 / ChatGPT for review, and
               we always offer Bug Bounty money, but we can't guarantee. The stakes are too<br /><br /><hr /><br /><br /></li>
	   <li><b>What happens if the Wallet is funded but I can't pay the one-time fee?</b></li>
	   <li>In terms of an Investors account, nothing. The funds will remain in the wallet
	       for the existence of Ethereum; the Private Key and Seed Phrase will be
	       transferred to you upon closure of the platform for existential, legal or
	       financial reasons. In case of a Engineer/Developer account, we will decide
	       on a case-to-case basis, but in general language, $5 or $10 with the prospect
	       of an angel investment, are  always obtainable. Of course, the funds will be
	       as well transmitted in case of closure of the platform. This means the private
	       key and seed phrase. If we can put in the effort, in whatever situation we are,
	       we will transfer manually as per your request. This is one of the reasons why
	       data such as your Email address and Passport identification are so important.<br /><br /><hr /><br /><br />
	    </li>
           <li><b>What happens if I lost access to my Email address and password?</b></li>
           <li>We would try to identify you with your passport and potentially a life video
	       session, but we are not required to do this by law. We are doing it as a courtesy.
               <br /><br /><hr /><br /><br />
            </li>
	</ul>
	
	</div>
      </div>
    </div>
  );
}

export default TOS;
