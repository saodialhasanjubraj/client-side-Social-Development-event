import React from "react";
import HeroSection from "./Home Component/HeroSection";
import FeatureCard from "./Home Component/FeatureCard";
import { Our_Gallery } from "./Home Component/Our_Gallery";

// import SomeOfOurMemory from "./Home Component/SomeOfOurMemory";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureCard />
      {/* <SomeOfOurMemory/> */}
      <Our_Gallery/>
    </div>
  );
};

export default Home;
