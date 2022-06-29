import "./login-register.css";
import { useState } from "react";
import Axios from "axios";

function Login({ setIsRegistered }) {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleLogin = async () => {
    try {
      const login = await Axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/login`
      );
      // setProductList(productsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <h1 className="title-offcanvas">LOG IN</h1>
      <p className="subtitle-offcanvas">
        Welcome back to Cakes Shop, please put your login credentials below to
        start shopping.
      </p>
      <form onSubmit={handleLogin}>
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
        <button className="button-submit">Log in</button>
      </form>
      <small>Don't have an account?</small>
      <button
        className="button-signup"
        onClick={() => {
          setIsRegistered(false);
        }}
      >
        Register now for free.
      </button>
    </div>
  );
}

export default Login;
