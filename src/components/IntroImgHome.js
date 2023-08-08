import React from "react";
import "./IntroImgHomeStyles.css";
import IntroImg from "../assets/background-image-2.jpg";
import { Link } from "react-router-dom";

const IntroImgHome = () => {
  return (
    <div className="intro">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="intro-content">
        <p>Hi, I'm Mihir Patel.</p>
        <h1>Software Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroImgHome;
