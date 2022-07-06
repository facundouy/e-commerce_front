import React from "react";
import "./about.css";

import { DiReact, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress, SiSupabase, SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <div className="about-cover">
      <span>about our </span>
      <h2>PROJECT</h2>
      <div className="image-separator">
        <img
          src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
          alt="Separador"
        />
      </div>
      <div className="about-parragraphs-container">
        <p>
          Dolcetto es el e-commerce de una tienda de postres realizado en las
          últimas 3 semanas del coding bootcamp de Hack Academy. Para ello se
          trabajó tanto en el Front como en el Backend. uo utinam altera ei, an
          quando tempor signiferumque eum. Euismod deserunt conceptam no vix.
          Nonumes inimicus philosophia ei pro, eum in melius verterem
          abhorreant. Ea case errem est.
        </p>
        <p>
          Sea persius alienum iudicabit in, ex diam diceret legendos usu, cu per
          scripta virtute. Dicat errem verear te eam, sea graece audire maiorum
          ex. Mei dicunt epicuri nostrum id, has et labores propriae offendit.
          An posse periculis persecuti sit, nominavi corrum pit ex per. No has
          habeo nominavi adversarium, sit at debitis inermis reprehend. Cibo
          eligendi moderatius ut vel, in oporteat.
        </p>
      </div>
      <div className="about-tech-section">
        <span>made it with this</span>
        <h2>TECHNOLOGIES</h2>
        <div className="image-separator">
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador"
          />
        </div>
        <ul className="about-icons-container">
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
      </div>
      <span>about our</span>

      <div className="about-team-section">
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
      </div>
    </div>
  );
};

export default About;
