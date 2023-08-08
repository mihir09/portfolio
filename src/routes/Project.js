import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImgOthers from "../components/IntroImgOthers";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <IntroImgOthers heading="Projects." text="Some of my personal works." />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
