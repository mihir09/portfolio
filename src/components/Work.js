import React from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="project-container">
      {WorkCardData.map((val, index) => {
        return (
          <WorkCard
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            description={val.description}
            techStacks={val.techStacks}
            githubLink={val.githubLink}
          />
        );
      })}
    </div>
  );
};

export default Work;
