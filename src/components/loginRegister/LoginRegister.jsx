import "./login-register.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function LoginRegister({ show, setShow }) {
  const handleClose = () => setShow(false);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
      <Offcanvas.Header closeButton className="close-button">
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Register />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginRegister;
