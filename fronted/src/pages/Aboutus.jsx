import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | ZeeCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl="/hero.png" />
    </>
  );
};

export default AboutUs;