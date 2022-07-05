import "./login-register.css";
import { useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { storeToken } from "../../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login({ setIsRegistered }) {
	const [inputEmail, setInputEmail] = useState("");
	const [inputPassword, setInputPassword] = useState("");
	const dispatch = useDispatch();
	const handleLogin = async (event) => {
		event.preventDefault();
		const response = await Axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/api/login`,
			{
				email: { inputEmail },
				password: { inputPassword },
			},
			{
				headers: {
					Authorization:
						"Bearer " +
						"eyJhbGciOiJIUzI1NiJ9.eyBhZG1pbjogdHJ1ZSB9.v74KBM9P78bQZ8T8FDFMCXhABNAuOQAHgtezWL-x4-Y",
				},
			}
		);
		dispatch(storeToken({ userInfo: response.data }));
		setInputEmail("");
		setInputPassword("");
	};

	return (
		<>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
			/>
			<div className='login-container'>
				<h1 className='title-offcanvas'>LOG IN</h1>
				<p className='subtitle-offcanvas'>
					Welcome back to Dolcetto, please put your login credentials below to
					start shopping.
				</p>
				<form onSubmit={handleLogin}>
					<label htmlFor=''>Email</label>
					<input
						className='input'
						type='email'
						value={inputEmail}
						placeholder='example@example.com'
						onChange={(event) => setInputEmail(event.target.value)}
						required
					/>
					<label htmlFor=''>Password</label>
					<input
						className='input'
						type='password'
						value={inputPassword}
						placeholder='Password'
						onChange={(event) => setInputPassword(event.target.value)}
						required
					/>
					<button className='button-submit' type='submit'>
						Log in
					</button>
				</form>
				<small>Don't have an account?</small>
				<button
					className='button-signup'
					onClick={() => {
						setIsRegistered(false);
					}}>
					Register now for free.
				</button>
			</div>
		</>
	);
}
export default Login;
