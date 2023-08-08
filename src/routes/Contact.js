import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntroImgOthers from "../components/IntroImgOthers";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <IntroImgOthers heading="Contact." text="Lets have a chat." />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
