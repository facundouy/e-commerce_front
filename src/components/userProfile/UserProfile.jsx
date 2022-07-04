import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./userProfile.css";
import { logout } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

function UserProfile() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const config = {
		headers: {
			Authorization: "Bearer " + user.token,
		},
	};
	useEffect(() => {
		async function getUser() {
			const response = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/user/${user.user._id}`,
				config
			);
		}

		getUser();
	}, []);
	return (
		<div className='container d-flex text-white bg-dark flex-wrap justify-content-center profile-container'>
			<div className='profile-card'>
				<h1>
					{user.user.firstname} {user.user.lastname}
				</h1>
				<small>{user.user.email}</small>
				<button
					onClick={() => {
						dispatch(logout());
						navigate("/");
					}}>
					Logout
				</button>
			</div>
		</div>
	);
}

export default UserProfile;
