import "./login-register.css";
import { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { storeToken } from "../../redux/userSlice";

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
			}
		);
		dispatch(storeToken({ userInfo: response.data }));
		setInputEmail("");
		setInputPassword("");
	};

	return (
		<>
			<div className='login-container'>
				<div>
					<h1 className='title-offcanvas'>LOG IN</h1>
					<p className='subtitle-offcanvas'>
						Welcome back, please enter your credentials to start shopping.
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
				<a
					className='admin-button'
					href='https://admin-dolcetto.vercel.app/'
					target='_blank'>
					Go to Admin site
				</a>
			</div>
		</>
	);
}
export default Login;
