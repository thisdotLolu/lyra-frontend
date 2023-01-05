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
    	   <li>We gurantee availability of our services through a global distributed high-availability network. In case of global catastrophe, like a world war, with nuclear impact, or a comet, it is possible that a global outage of our services occurs and you can not access your funds upon arrival. In any other case, the services in at least 1-2 national territories will be online, so will be parts of the Ethereum Blockchain.</li>
	</ul>
	</div>
      </div>
    </div>
  );
}

export default TOS;
