import React from "react";
import blur5 from "../assets/blur5.png";
import blur6 from "../assets/blur6.png";
import blur7 from "../assets/blur7.png";
import myworkbg from "../assets/myworkbg.png";
import myworkbg2 from "../assets/myworkbg2.png";
import myworkbg3 from "../assets/myworkbg3.png";
import myworkbg4 from "../assets/myworkbg4.png";
import myworkbg5 from "../assets/myworkbg5.png";
import myworkl1 from "../assets/myworkl1.png";
import myworkl2 from "../assets/myworkl2.png";
import myworkl3 from "../assets/myworkl3.png";
import myworkl4 from "../assets/myworkl4.png";
import myworkl5 from "../assets/myworkl5.png";

import myworka from "../assets/myworka.png";

const Mywork = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="headers">
        <h1>My Work</h1>
      </div>
      <div className="myworkcontainer">
        <img className="blur5" src={blur5} alt="" />
        <img className="blur6" src={blur6} alt="" />
        <img className="blur7" src={blur7} alt="" />
        <div className="cardcontainer">
          <div className="mycard">
            <img className="myworkbg" src={myworkbg} alt="" />
            <div className="myworkl4">
              <img src={myworkl1} alt="" />
            </div>
            <div className="myworkcontent">
              I manage social media and ad campaigns for Osie Sports, enhancing
              their online presence and driving targeted engagement.
            </div>
            <div className="redirectmywork">
              <a href="https://marketinlab.com/portfolio/"target="blank">
            <img className="myworka" src={myworka} alt="" />
            </a>
            </div>
          </div>
          <div className="mycard">
            {" "}
            <img className="myworkbg" src={myworkbg2} alt="" />
            <div className="myworkl4">
              <img src={myworkl2} alt="" />
            </div>
            <div className="myworkcontent">
              I provide high-quality content writing services for Toolv.io,
              crafting engaging and informative content to elevate their brand.
            </div>
            <div className="redirectmywork">
              <a href="https://marketinlab.com/portfolio/"target="blank">
            <img className="myworka" src={myworka} alt="" />
            </a>
            </div>          </div>
          <div className="mycard">
            {" "}
            <img className="myworkbg" src={myworkbg3} alt="" />
            <div className="myworkl4">
              <img src={myworkl3} alt="" />
            </div>
            <div className="myworkcontent">
              I handle social media management for NBD Diagnostic, boosting
              their online engagement and visibility.
            </div>
            <div className="redirectmywork">
              <a href="https://marketinlab.com/portfolio/"target="blank">
            <img className="myworka" src={myworka} alt="" />
            </a>
            </div>          </div>
          <div className="mycard">
            {" "}
            <img className="myworkbg" src={myworkbg4} alt="" />
            <div className="myworkl4">
              <img src={myworkl4} alt="" />
            </div>
            <div className="myworkcontent">
              I deliver engaging and impactful content writing for On4t,
              enhancing their brand communication.
            </div>
            <div className="redirectmywork">
              <a href="https://marketinlab.com/portfolio/"target="blank">
            <img className="myworka" src={myworka} alt="" />
            </a>
            </div>          </div>
          <div className="mycard">
            {" "}
            <img className="myworkbg" src={myworkbg5} alt="" />
            <div className="myworkl4">
              <img src={myworkl5} alt="" />
            </div>
            <div className="myworkcontent">
              I manage blog publishing for Subtitleo, delivering consistent and
              engaging content to their audience.
            </div>
            <div className="redirectmywork">
              <a href="https://marketinlab.com/portfolio/" target="blank">
            <img className="myworka" src={myworka} alt="" />
            </a>
            </div>          </div>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default Mywork;
