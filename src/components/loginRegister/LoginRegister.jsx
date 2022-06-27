import "./login-register.css";

import Offcanvas from "react-bootstrap/Offcanvas";

function LoginRegister({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end" name="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default LoginRegister;
