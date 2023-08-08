import React, { useState } from "react";
import "./WorkCardStyles.css";
import ReactCardFlip from "react-card-flip";

function WorkCard(props) {
  const [flip, setFlip] = useState(false);
  return (
    <div className="project">
      <div className="project-inner">
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div className="project-front">
            <div className="project-dl">
              <img src={props.imgsrc} alt="pic" />
              <h2 className="project-title">{props.title}</h2>

              <div className="project-details">
                <p>{props.description}</p>
              </div>
            </div>
            <div className="project-btn">
              <a href={props.githubLink} target="_blank" rel="noreferrer">
                <button
                  className="btn"
                  style={{ borderBottom: 0, borderLeft: 0 }}
                >
                  Github
                </button>
              </a>
              <button
                className="btn"
                style={{ borderBottom: 0, borderRight: 0 }}
                onClick={() => setFlip(!flip)}
              >
                Techs
              </button>
            </div>
          </div>
          <div className="project-back">
            <div className="project-dl project-dl-back">
              <ul>
                {props.techStacks?.map((tech) => (
                  <div className="list-item">
                    <li>
                      <p>
                        {tech.name}:{tech.list}
                      </p>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="project-btn">
              <a href={props.githubLink} target="_blank" rel="noreferrer">
                <button
                  className="btn"
                  style={{ borderBottom: 0, borderLeft: 0 }}
                >
                  Github
                </button>
              </a>
              <button
                className="btn"
                style={{ borderBottom: 0, borderRight: 0 }}
                onClick={() => setFlip(!flip)}
              >
                Details
              </button>
            </div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}

export default WorkCard;
