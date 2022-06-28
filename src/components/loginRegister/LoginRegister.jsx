import "./login-register.css";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function LoginRegister({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
      <Offcanvas.Header closeButton className="close-button">
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* <div className="login-container">
          <h1 className="title-offcanvas">LOG IN</h1>
          <p className="subtitle-offcanvas">
            Welcome to Cakes Shop, please put your login credentials below to
            start shopping.
          </p>
          <div>
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
          <button className="button-login">Log in</button>
          <small>Don't have an account?</small>
          <button className="button-signup">Sign up for free.</button>
        </div> */}
        <div className="register-container">
          <h1 className="title-offcanvas">SIGN UP</h1>
          <p className="subtitle-offcanvas">
            Welcome to Cakes Shop, please put your login credentials below to
            start shopping.
          </p>
          <div>
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
