import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login-register.css";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

function LoginRegister({ show, setShow }) {
	const usertoken = useSelector((state) => state.user);
	const [isRegistered, setIsRegistered] = useState(true);
	const handleClose = () => setShow(false);
	return (
		<>
			<Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
				<Offcanvas.Header closeButton className='close-button'>
					<Offcanvas.Title></Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{isRegistered ? (
						<Login setIsRegistered={setIsRegistered} />
					) : (
						<Register setIsRegistered={setIsRegistered} />
					)}
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default LoginRegister;
