import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import blur3 from "../assets/blur3.png";
import servicelb1 from "../assets/servicelb1.png";
import servicel1 from "../assets/servicel1.png";
import lb2 from '../assets/lb2.png';
import lb3 from '../assets/lb3.png';
import lb4 from '../assets/lb4.png';
import lb5 from '../assets/lb5.png';
import l2 from '../assets/l2.png'
import l3 from '../assets/l3.png'
import l4 from '../assets/l4.png'
import l5 from '../assets/l5.png'
const Services = () => {
  return (
    <div className="services">
      <img className="blur3" src={blur3} alt="" />
      <div className="headers">
        <h1>Services</h1>
      </div>
      <br /><br />
      <div className="servicecard-3">
        <div className="card">
          <img src={service1} alt="" />
          <div className="cardlogo">
            <img className="lb1" src={servicelb1} alt="" />
            <img className="l1" src={servicel1} alt="" />
          </div>
          <hr className="custom-line" />

          <div className="cardname">
            <h3>Social Media Management</h3>
          </div>
          <div className="cardcontent">
            <p>
              I provide comprehensive social media management that boosts your
              online presence and engages your audience effectively.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={service2} alt="" />
          <div className="cardlogo">
            <img className="lb1" src={lb2} alt="" />
            <img className="l2" src={l2} alt="" />
          </div>
          <hr className="custom-line" />

          <div className="cardname">
            <h3>Content Writing</h3>
          </div>
          <div className="cardcontent">
            <p>
              I deliver engaging and high-quality content writing that
              effectively communicates your brand's message and captivates your
              audience.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={service3} alt="" />
          <div className="cardlogo">
            <img className="lb1" src={lb3} alt="" />
            <img className="l2" src={l3} alt="" />
          </div>
          <hr className="custom-line" />

          <div className="cardname">
            <h3>SEO</h3>
          </div>
          <div className="cardcontent">
            <p>
              I offer expert SEO services that enhance your online visibility
              and drive organic traffic to your website.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={service4} alt="" />
          <div className="cardlogo">
            <img className="lb1" src={lb4} alt="" />
            <img className="l2" src={l4} alt="" />
          </div>
          <hr className="custom-line" />

          <div className="cardname">
            <h3>Graphic Designing</h3>
          </div>
          <div className="cardcontent">
            <p>
              I provide visually stunning and impactful graphic design services
              that elevate your brand's identity and captivate your audience.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="cl" src={service5} alt="" />
          <div className="cardlogo">
            <img className="lb1" src={lb5} alt="" />
            <img className="l2" src={l5} alt="" />
          </div>
          <hr className="custom-line" />

          <div className="cardname">
            <h3>Copy writing</h3>
          </div>
          <div className="cardcontent">
            <p>
              I create persuasive and compelling copywriting that drives
              engagement and converts prospects into customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
