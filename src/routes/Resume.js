import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImgOthers from "../components/IntroImgOthers";
import ResumeRender from "../components/ResumeRender";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <IntroImgOthers heading="Resume." text="Check out my resume." />
      <ResumeRender />
      <Footer />
    </div>
  );
};

export default Resume;
