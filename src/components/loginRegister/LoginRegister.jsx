import "./login-register.css";
import "./login"
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function LoginRegister({ show, setShow }) {
  const handleClose = () => setShow(false);


  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
      <Offcanvas.Header closeButton className="close-button">
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
        <div className="register-container">
          <h1 className="title-offcanvas">SIGN UP</h1>
          <p className="subtitle-offcanvas">
            Welcome to Cakes Shop, please put your login credentials below to
            start shopping.
          </p>
          <div>
          <label htmlFor="">Name</label>
            <input
              className="input"
              type="text"
              value={input}
              placeholder="Jane"
              onChange={(event) => setInput(event.target.value)}
            />
            <label htmlFor="">Last Name</label>
            <input
              className="input"
              type="text"
              value={input}
              placeholder="Doe"
              onChange={(event) => setInput(event.target.value)}
            />
            <label htmlFor="">Email</label>
            <input
              className="input"
              type="text"
              value={input}
              placeholder="example@example.com"
              onChange={(event) => setInput(event.target.value)}
            />
            <label htmlFor="">Password</label>
            <input
              className="input"
              type="text"
              value={input2}
              placeholder="Password"
              onChange={(event) => setInput2(event.target.value)}
            />
          </div>
          <button className="button-login">Sign in</button>
          <small>Alredy have an account?</small>
          <button className="button-signup">Log in.</button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginRegister;
