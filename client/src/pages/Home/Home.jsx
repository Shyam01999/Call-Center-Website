import React from "react";
import HeroSection from "./HeroSection";
import WelcomeSection from "./WelcomeSection";
import Services from "./Services";
import WhyChooseSection from "./WhyChooseSection";
import ContactusSection from "./ContactusSection";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WelcomeSection></WelcomeSection>
      <Services></Services>
      <WhyChooseSection></WhyChooseSection>
      <ContactusSection></ContactusSection>
    </>
  );
}

export default Home;
