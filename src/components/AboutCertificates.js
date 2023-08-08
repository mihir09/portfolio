import "./AboutComponentStyles.css";
import React from "react";

function AboutCertificates(props) {
  return (
    <div
      className="section-certificates"
      style={{ backgroundImage: `url(${props.bgimgsrc})` }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="300"
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="certificates">
          <div className="info-img">
            <img src={props.imgsrc} className="img" alt="true" />
          </div>

          <div className="info">
            <h3>{props.title}</h3>

            <p>{props.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default AboutCertificates;
