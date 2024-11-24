import "./AboutComponentStyles.css";
import React from "react";

function AboutCertificates(props) {
  return (
    <div
      className="section-certificates"
      style={{ backgroundImage: `url(${props.bgimgsrc})` }}
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-duration="100"
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="certificates">
          <div className="info-img">
            <img src={props.imgsrc} className="img" alt="true" />
          </div>

          <div className="info">
            <h3>{props.title}</h3>

            <p className="info-description">{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default AboutCertificates;
