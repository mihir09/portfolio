import React from "react";
import "./FeaturedWorkStyles.css";
import WorkCardData from "./WorkCardData";

const FeaturedWork = () => {
  const featuredWorks = WorkCardData.slice(0, 3);

  return (
    <div className="featured-work-container">
      <div className="featured-work-title" data-aos="fade-up">
        <h2>Featured</h2>
      </div>

      <div className="featured-work-row">
        {featuredWorks &&
          featuredWorks.map((work) => (
            <div
              className="featured-work"
              key={work.title}
              data-aos="zoom-in-up"
              data-aos-duration="700"
            >
              <img
                src={work.imgsrc}
                alt={work.title}
                className="featured-work-image"
              />
              <h2 className="featured-work-title">{work.title}</h2>
              
              <a
                href={work.deploymentLink || work.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-work-link"
              >
                View Project
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedWork;