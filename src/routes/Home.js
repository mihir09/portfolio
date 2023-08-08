import React from "react";
import Navbar from "../components/Navbar";
import IntroImgHome from "../components/IntroImgHome";
import Footer from "../components/Footer";
import Services from "../components/Services";
const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroImgHome />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
