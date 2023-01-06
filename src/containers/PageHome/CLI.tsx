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
import CLIHero from "components/SectionHero/CLIHero";
import SectionSliderCollections from "components/SectionSliderCollections";

function CLI() {
  return (
    <div className="nc-CLI relative overflow-hidden">
      <div className="container px-4">
        {/* SECTION HERO */}
        <CLIHero />
      </div>

      <div className="container relative space-y-24 mb-24 lg:space-y-32 lg:mb-32">

        {/* SECTION */}
        <div className="relative py-20 lg:py-24">
	Lyra CLI is a fully-fledged GitNFT marketplace command-line interface.
	It allowsyou to trade, fund, propose and sell Github.com repositories
	as an Engineer/Developer, Investor or Corporate client. To contribute to 
        our ecosystem, we provide valueable tools such as the LyraGit SDK
	and the CLI, as well as, of course, our API. The CLI is written in Go
        for performance, such as the original Github CLI (gh).
	<br />
	<br />
<script src="https://gist.github.com/zdanl/ca3a17888e443af9a4fc394d7fc98485.js"></script>


        </div>
      </div>
    </div>
  );
}

export default CLI;
