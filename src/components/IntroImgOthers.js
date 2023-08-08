import React from "react";
import "./IntroImgOthersStyles.css";

function IntroImgOthers(props) {
  return (
    <div className="intro-img-others">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default IntroImgOthers;
