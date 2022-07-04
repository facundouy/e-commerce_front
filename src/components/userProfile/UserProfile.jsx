import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";

function UserProfile() {
	const user = useSelector((state) => state.user);

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
			</div>
		</div>
	);
}

export default UserProfile;
