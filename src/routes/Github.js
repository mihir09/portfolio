import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImgOthers from "../components/IntroImgOthers";
import GithubProjects from "../components/GithubProjects";

const Github = () => {
  return (
    <div>
      <Navbar />
      <IntroImgOthers
        heading="Github Projects. (Beta)"
        text="Projects fetched from Github."
      />
      <GithubProjects />
      <Footer />
    </div>
  );
};

export default Github;
