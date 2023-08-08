import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="container-left-section">
          <div className="location">
            <FaHome size={30} style={{ marginRight: "1rem" }} />
            <p>Riverside, California</p>
          </div>

          <div className="phone">
            <h4>
              <a href="tel:+19515732968">
                <FaPhone size={20} style={{ marginRight: "1rem" }} />
                +1-951-573-2968
              </a>
            </h4>
          </div>

          <div className="email">
            <h4>
              <a href="mailto:mihirjagdishbhai.patel@email.ucr.edu?subject='Reaching out from portfolio!'">
                <FaMailBulk size={20} style={{ marginRight: "1rem" }} />
                mihirjagdishbhai.patel@email.ucr.edu
              </a>
            </h4>
          </div>
        </div>

        <div className="container-right-section">
          <h4>Let's Connect!</h4>
          <p>
            Check out and connect with me on the following social platforms.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/mihir-patel-b78b92157/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={30} style={{ marginRight: "1rem" }} />
            </a>
            <FaInstagram size={30} style={{ marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
