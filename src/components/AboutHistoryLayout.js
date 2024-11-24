import "./AboutComponentStyles.css";
import React from "react";

function AboutHistoryLayout(props) {
  return (
    <div
      className="section-history"
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="100"
    >
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>

      <div className="info-img">
        <div className="img-container">
          <img src={props.imgsrc} className="img" alt="true" />
        </div>
      </div>
    </div>
  );
}
export default AboutHistoryLayout;
