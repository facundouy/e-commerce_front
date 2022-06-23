import { GiCupcake } from "react-icons/gi";
import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact-container">
        <h5>CONTACT</h5>
        <p>Heinrichstrasse 267c / 3. Stock 8005 Zürich</p>
        <p>E-mail: dolcino@qodeinteractive.com</p>
        <p>Phone: +88(0) 101 0000 000</p>
      </div>
      <div className="center">
        <div className="logo-center-footer">
          <GiCupcake className="logo" />
          <span>eat what you love</span>
          <h4>CAKES SHOP</h4>
          <img
            src="https://dolcino.qodeinteractive.com/wp-content/uploads/2018/10/h1-slide-1-img-1.png"
            alt="Separador" className="separator"
          />
          <p>
            1926. - Year of beggining. There are many variations of passa ges of
            Lorem Ipsum avai lable, but the majority suffered alter.
          </p>
          <div className="container-icons-footer"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
