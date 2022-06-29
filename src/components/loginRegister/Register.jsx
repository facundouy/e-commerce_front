import "./login-register.css";
import { useState } from "react";

function Register({ setIsRegistered }) {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="register-container">
      <h1 className="title-offcanvas">REGISTER</h1>
      <p className="subtitle-offcanvas">
        Welcome to Cakes Shop, please create an account to start shopping.
      </p>
      <form>
        <label className="label" htmlFor="">
          Name
        </label>
        <input
          className="input"
          type="text"
          value={inputName}
          placeholder="Jane"
          onChange={(event) => setInputName(event.target.value)}
        />
        <label className="label" htmlFor="">
          Last Name
        </label>
        <input
          className="input"
          type="text"
          value={inputLastName}
          placeholder="Doe"
          onChange={(event) => setInputLastName(event.target.value)}
        />
        <label className="label" htmlFor="">
          Address
        </label>
        <input
          className="input"
          type="text"
          value={inputAddress}
          placeholder="Av. Gral. Libertador 0000"
          onChange={(event) => setInputAddress(event.target.value)}
        />
        <label className="label" htmlFor="">
          Phone number
        </label>
        <input
          className="input"
          type="number"
          value={inputPhone}
          placeholder=" 099 000 000"
          onChange={(event) => setInputPhone(event.target.value)}
        />
        <label className="label" htmlFor="">
          Email
        </label>
        <input
          className="input"
          type="text"
          value={inputEmail}
          placeholder="example@example.com"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <label className="label" htmlFor="">
          Password
        </label>
        <input
          className="input"
          type="password"
          value={inputPassword}
          placeholder="Password"
          onChange={(event) => setInputPassword(event.target.value)}
        />
      </form>
      <button className="button-submit">Register now</button>
      <small>Alredy have an account?</small>
      <button
        onClick={() => {
          setIsRegistered(true);
        }}
        className="button-signup"
      >
        Log in.
      </button>
    </div>
  );
}

export default Register;
