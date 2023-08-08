import React from "react";
import "./AboutComponentStyles.css";
import AboutHistoryLayout from "./AboutHistoryLayout";
import AboutHistoryData from "./AboutHistoryData";
import AboutCertificates from "./AboutCertificates";
import AboutCertificatesData from "./AboutCertificatesData";

const AboutComponent = () => {
  return (
    <div className="about">
      <h1 className="section-heading"> About Me </h1>
      {AboutHistoryData.map((val, index) => {
        return (
          <AboutHistoryLayout
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
          />
        );
      })}

      <h1 className="section-heading"> Certificates </h1>
      {AboutCertificatesData.map((val, index) => {
        return (
          <AboutCertificates
            key={index}
            link={val.link}
            bgimgsrc={val.bgimgsrc}
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
          />
        );
      })}
    </div>
  );
};

export default AboutComponent;
