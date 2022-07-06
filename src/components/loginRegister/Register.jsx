import "./login-register.css";
import { useState } from "react";
import Axios from "axios";

function Register({ setIsRegistered }) {
  const [inputName, setInputName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user`, {
      firstname: { inputName },
      lastname: { inputLastName },
      email: { inputEmail },
      tel: { inputPhone },
      address: { inputAddress },
      password: { inputPassword },
    });
    setIsRegistered(true);
    setInputName("");
    setInputLastName("");
    setInputEmail("");
    setInputPhone("");
    setInputAddress("");
    setInputPassword("");
  };

  return (
    <div className="register-container">
      <h1 className="title-offcanvas">REGISTER</h1>
      <p className="subtitle-offcanvas">
        Welcome to Dolcetto, please create an account to start shopping.
      </p>
      <form onSubmit={handleRegister}>
        <label className="label" htmlFor="">
          Name
        </label>
        <input
          className="input"
          type="text"
          value={inputName}
          placeholder="Jane"
          onChange={(event) => setInputName(event.target.value)}
          required
          minLength={4}
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
          required
          minLength={4}
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
          required
          minLength={4}
        />
        <label className="label" htmlFor="">
          Phone number
        </label>
        <input
          className="input"
          type="tel"
          value={inputPhone}
          placeholder=" 099 000 000"
          onChange={(event) => setInputPhone(event.target.value)}
          minLength={9}
        />
        <label className="label" htmlFor="">
          Email
        </label>
        <input
          className="input"
          type="email"
          value={inputEmail}
          placeholder="example@example.com"
          onChange={(event) => setInputEmail(event.target.value)}
          required
          minLength={4}
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
          required
          minLength={8}
        />
        <button className="button-submit" type="submit">
          Register now
        </button>
        <small>Alredy have an account?</small>
        <button
          onClick={() => {
            setIsRegistered(true);
          }}
          className="button-signup"
        >
          Log in.
        </button>
      </form>
    </div>
  );
}

export default Register;
