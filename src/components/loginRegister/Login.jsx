import "./login-register.css";
import { useState } from "react";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  return (
    <div className="login-container">
      <h1 className="title-offcanvas">LOG IN</h1>
      <p className="subtitle-offcanvas">
        Welcome back to Cakes Shop, please put your login credentials below to
        start shopping.
      </p>
      <form>
        {/* onSubmit={handleLogin} */}
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
        <button className="button-login">Log in</button>
      </form>
      <small>Don't have an account?</small>
      <button className="button-signup">Register now for free.</button>
    </div>
  );
}

export default Login;
