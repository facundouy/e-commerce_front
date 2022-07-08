import React from "react";
import "./about.css";

import { DiReact, DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiRedux, SiExpress, SiSupabase, SiVercel } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
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
          <span>D</span>
          olcetto es el e-commerce de una posible tienda de postres realizado en
          las últimas tres semanas del Coding Bootcamp de Hack Academy, un curso
          de modalidad full-time de más de 600 horas de dedicación a lo largo de
          tres meses, basado en el ecosistema JavaScript. El desafío que dio
          lugar al proyecto fue hacer un e-commerce funcional en tres semanas,
          para el cual optamos por una tienda de postres, motivados
          especialmente por la amplia disponibilidad de fotografías de calidad,
          y elegimos el proyecto{" "}
          <a
            href="https://dolcino.qodeinteractive.com/"
            className="dolcino-link"
          >
            Dolcino
          </a>{" "}
          como referencia de diseño.
        </p>
        <p>
          El e-commerce se compone de tres subproyectos: la tienda, el sitio del
          administrador y un servidor back-end que conecta con la base de datos.
          La tienda es una aplicación React provista de una store de Redux donde
          se guardan los productos, el carrito y el ID y el token de acceso del
          usuario. En la misma se pueden realizar todas las acciones esperables
          en una tienda de esta naturaleza, y se comunica con el servidor del
          back-end mediante llamadas AJAX a través de la librería Axios. El
          sitio del administrador es también una aplicación React con una store
          de Redux. Desde el mismo se puede hacer CRUD de productos, categorías
          y administradores, y acceder a todo el registro de la actividad de la
          tienda. El servidor está basado en Node.js y se conecta a una base de
          datos MongoDB mediante el ODM Mongoose. En la base de datos se guarda
          la información de los productos, los usuarios, los administradores y
          las órdenes. El sitio se consume como API REST mediante llamadas AJAX.
          El deploy del sitio se hizo mediante Vercel, la base de datos se aloja
          en MongoDB Atlas y las imágenes en Supabase.
        </p>
        <p>
          Encontrarás más información sobre nosotros y cómo ponerte en contacto
          al final de esta página.
        </p>
      </div>

      <div className="banner-separator">
        <span></span>
      </div>

      <div className="about-tech-section">
        <span>made with this</span>
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
            <img src="/m.png" className="icons" alt="mongoose icon" />
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

        <div className="container team-photos-container">
          <div className="team-photos-subcontainer">
            <div className="member-card">
              <img src="/Flo.png" alt="profile" />
              <div className="member-name">Florencia Falco</div>
              <a
                className="member-linkedin"
                href="https://www.linkedin.com/in/florencia-falco/#"
              >
                <BsLinkedin className="li-icon" />
              </a>
            </div>
            <div className="member-card">
              <img src="/Santi.png" alt="profile" />
              <div className="member-name">Santiago Fantoni</div>
              <a
                className="member-linkedin"
                href="https://www.linkedin.com/in/santiago-fantoni"
              >
                <BsLinkedin className="li-icon" />
              </a>
            </div>
          </div>
          <div className="team-photos-subcontainer">
            <div className="member-card">
              <img src="/Facu.png" alt="profile" />
              <div className="member-name">Facundo Irazusta</div>
              <a
                className="member-linkedin"
                href="https://www.linkedin.com/in/facundo-irazusta/"
              >
                <BsLinkedin className="li-icon" />
              </a>
            </div>

            <div className="member-card">
              <img src="/Pau.png" alt="profile" />
              <div className="member-name">Paulina Irazusta</div>
              <a
                className="member-linkedin"
                href="https://www.linkedin.com/in/paulina-irazusta/#"
              >
                <BsLinkedin className="li-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="stats-container">
          <div className="stats-subcontainer">
            <div className="number-container">
              <span>3</span>
              <h5>WEEKS</h5>
            </div>
            <div className="number-container">
              <span>150+</span>
              <h5>HOURS-PERSON</h5>
            </div>
          </div>
          <div className="stats-subcontainer">
            <div className="number-container">
              <span>4</span>
              <h5>COLABORATORS</h5>
            </div>
            <div className="number-container">
              <span>400+</span>
              <h5>COMMITS</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
