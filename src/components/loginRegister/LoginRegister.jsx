import "./login-register.css";

import Offcanvas from "react-bootstrap/Offcanvas";

function LoginRegister({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
      <Offcanvas.Header closeButton className="close-button">
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h1>Create an account</h1>
        <span>Create an account</span>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="text" />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginRegister;
