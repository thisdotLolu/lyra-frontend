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

function Developers() {
  return (
    <div className="nc-Developers relative overflow-hidden">
      <div className="container px-4">
        {/* SECTION HERO */}
        <DeveloperHero />
      </div>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
        <h2>Documentation</h2>
	<ul>
	    <li>foo</li>
	</ul>
	</div>
      </div>
    </div>
  );
}

export default Developers;
