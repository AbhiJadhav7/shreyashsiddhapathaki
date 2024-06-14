import React from "react";
import blur2 from '../assets/blur2.png';
const Clients = () => {
  return (
    <div>
      <div className="clients">
        <img className="blur2" src={blur2} alt="" />
        <h1>Clients</h1>
        <br />
        <br />
        <div className="clientscontainer">
          <div className="gas">
            <span className="number">Ongoing</span>
            <p className="symbol">4</p>
            <p className="name">
              Our ongoing clients are thrilled with the consistent growth in
              their online presence and engagement thanks to our dedicated
              social media management and content writing services. They
              appreciate our tailored strategies and proactive support.
            </p>
          </div>
          <div className="gas">
            <span className="number">Completed</span>
            <p className="symbol">2</p>
            <p className="name">
              Our completed clients have praised the effective and impactful
              content we've delivered, which has significantly boosted their
              brand visibility. They commend our ability to bring their vision
              to life and achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
