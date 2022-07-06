import React from "react";
import "./about.css";

import { DiReact, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress, SiSupabase, SiVercel } from "react-icons/si";
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

        <span>made it with this</span>
        <h2>STACK</h2>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>

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
            <SiVercel className="icons" />
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

        <span>about our</span>
        <h2>TEAM</h2>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
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
