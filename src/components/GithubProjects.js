import React, { useState, useEffect } from "react";
import "./WorkCardStyles.css";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");
  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/mihir09/repos?per_page=6&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setShowViewMore("All Repositories are Displayed!!!");
        } else {
          setProjects([...projects, ...data]);
          setShowViewMore(<button className="btn">View More</button>);
        }
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const projectCards = projects.map((projectCard) => {
    var LinkUrl;
    var extraClass;
    if (projectCard.homepage == null || projectCard.homepage === "") {
      LinkUrl = projectCard.html_url;
      extraClass = "demo project";
    } else {
      LinkUrl = projectCard.homepage;
      extraClass = "git project";
    }
    return (
      <div className={extraClass} key={projectCard.id}>
        <a href={LinkUrl} target="_blank" rel="noreferrer">
          <h2 className="project-title">{projectCard.name}</h2>

          <p className="project-description">
            <b>Description:</b>
            <br></br>
            {projectCard.description}
          </p>
          <br></br>
          <p className="project-tools">
            <b>Skills and Tools:</b>

            {projectCard.topics?.map((topic) => (
              <div>{topic} </div>
            ))}
          </p>
        </a>
      </div>
    );
  });

  return (
    <div className="project-container">
      {projectCards}

      <p className="view-more" onClick={viewMore}>
        {showViewMore}
      </p>
    </div>
  );
};

export default GithubProjects;
