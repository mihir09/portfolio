import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImgOthers from "../components/IntroImgOthers";
import AboutComponent from "../components/AboutComponent";

const About = () => {
  return (
    <div>
      <Navbar />
      <IntroImgOthers heading="About." text="I'm an enthusisatic Developer." />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default About;
