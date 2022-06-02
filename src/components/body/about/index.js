import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-title">
            Hi, I am <span className="info-name">Duy Cao</span>
          </span>
          <br />
          <span className="info-job">Full Stack Developer</span>
          <br />I love experimenting with the web
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
            alt=""
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
