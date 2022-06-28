import "./login-register.css";
import { useState } from "react";

function Register() {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="register-container">
      <h1 className="title-offcanvas">REGISTER</h1>
      <p className="subtitle-offcanvas">
        Welcome to Cakes Shop, please put your login credentials below to start
        shopping.
      </p>
      <div>
        <label htmlFor="">Name</label>
        <input
          className="input"
          type="text"
          value={inputName}
          placeholder="Jane"
          onChange={(event) => setInputName(event.target.value)}
        />
        <label htmlFor="">Last Name</label>
        <input
          className="input"
          type="text"
          value={inputLastName}
          placeholder="Doe"
          onChange={(event) => setInputLastName(event.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          className="input"
          type="text"
          value={inputEmail}
          placeholder="example@example.com"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          className="input"
          type="password"
          value={inputPassword}
          placeholder="Password"
          onChange={(event) => setInputPassword(event.target.value)}
        />
      </div>
      <button className="button-login">Register</button>
      <small>Alredy have an account?</small>
      <button className="button-signup">Log in.</button>
    </div>
  );
}

export default Register;
