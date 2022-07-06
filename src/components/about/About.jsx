import React from "react";
import "./about.css";

import { GiCupcake } from "react-icons/gi";


const About = () => {
  return (
    <div>
      <section className="about-cover">
        <>about our </>
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
              <DiReact />
              React
            </li>
            <li>
              <SiRedux />
              Redux
            </li>
            <li>
              <DiJavascript1 />
              JavaScript
            </li>
            <li>
              <DiNodejs />
              Nodejs
            </li>
            <li>
              <SiExpress />
              Express
            </li>
            <li>
              <DiMongodb />
              MongoDB
            </li>
            <li>
              <img src="" alt="" />
              Mongoose
            </li>
            <li>
              <IoLogoVercel />
              Vercel
            </li>
            <li>
              <SiSupabase />
              Supabase
            </li>
            <li>
              <AiFillGithub />
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
