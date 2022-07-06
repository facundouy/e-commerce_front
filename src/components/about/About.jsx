import React from "react";
import "./about.css";

import { DiReact, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress, SiSupabase } from "react-icons/si";
// import { IoLogoVercel } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <section className="about-cover">
        <span>about our </span>
        <h2>PROJECT</h2>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
        <p>
          Dolcetto es el e-commerce de una tienda de postres realizado en las
          últimas 3 semanas <br /> del coding bootcamp de Hack Academy. Para
          ello se trabajó tanto en el Front como en el Backend.
        </p>

        <div className="about-tech-container">
          <ul className="about-tech-container">
            <li>
              <DiReact className="icons" />
              React
            </li>
            <li>
              <SiRedux className="icons" />
              Redux
            </li>
            <li>
              <DiJavascript1 className="icons" />
              JavaScript
            </li>
            <li>
              <DiNodejs className="icons" />
              Nodejs
            </li>
            <li>
              <SiExpress className="icons" />
              Express
            </li>
            <li>
              <DiMongodb className="icons" />
              MongoDB
            </li>
            <li>
              <img src="" alt="" />
              Mongoose
            </li>
            <li>
              {/* <IoLogoVercel /> */}
              Vercel
            </li>
            <li>
              <SiSupabase className="icons" />
              Supabase
            </li>
            <li>
              <AiFillGithub className="icons" />
              Github
            </li>
          </ul>
        </div>

        <div className="team-photos-container">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-team-1-2.jpg"
            alt=""
          />
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-team-1-2.jpg"
            alt=""
          />
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-team-1-2.jpg"
            alt=""
          />
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-team-1-2.jpg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default About;
