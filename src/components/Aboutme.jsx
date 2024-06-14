import React from "react";
import blur8 from "../assets/blur8.png"
const Aboutme = () => {
  return (
    <div className="aboutme">
      <br />
      <br />
      <br />
      <br />
      <div className="headers">
        <h1>About Me</h1>
      </div>
        <img className="blur8" src={blur8} alt="" />
      <div className="aboutbg">
      <div className="aboutcontainer">
        <div className="about1">
        <div className="aboutimg"></div>
        </div>
        <div className="aboutcontent">
          <p>
            I am Shreyes Sidhhapathaki, a skilled professional with 2 years of
            experience in content writing, social media management, and graphic
            designing. I specialize in creating compelling content, managing
            effective social media campaigns, and designing visually appealing
            graphics that enhance brand identity. My dedication to delivering
            high-quality work and my ability to understand and meet client needs
            have consistently resulted in successful and impactful projects.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Aboutme;
