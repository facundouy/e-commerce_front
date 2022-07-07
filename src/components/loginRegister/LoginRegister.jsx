import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./login-register.css";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import { useSelector } from "react-redux";

function LoginRegister({ show, setShow }) {
	const token = useSelector((state) => state.user);
	const [isRegistered, setIsRegistered] = useState(true);
	const handleClose = () => setShow(false);

	return (
		<>
			{token.token ? (
				<div></div>
			) : (
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
			)}
		</>
	);
}

export default LoginRegister;
