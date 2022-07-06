import { GiCupcake } from "react-icons/gi";
import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer-container">
        <div className="contact-container">
          <h5>CONTACT</h5>
          <p>Av. Gral. Libertador 1234, Montevideo</p>
          <p>e-mail: hello@dolcetto.com</p>
          <p>Phone: +598 99 235 711</p>
        </div>
        <div className="center-container">
          <div className="logo-center-footer">
            <GiCupcake className="logo" />
            <span>eat what you love</span>
            <h4>DOLCETTO</h4>
            <img
              src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
              alt="Separador"
            />
            <p>Discover a whole new world of crafted sensations.</p>
          </div>
        </div>
        <div className="contact-container-2">
          <h5>CONTACT</h5>
          <p>Av. Gral. Libertador 1234, Montevideo</p>
          <p>e-mail: hello@dolcetto.com</p>
          <p>Phone: +598 99 235 711</p>
        </div>
        <div className="map-container-footer">
          <img src="/map.png" alt="world map" />
        </div>
      </div>
      <div className="footer-bottom">
        © 2022 Florencia Falco, Santiago Fantoni, Facundo Irazusta & Paulina
        Irazusta.
      </div>
    </>
  );
};

export default Footer;
