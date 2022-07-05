import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./userProfile.css";
import { logout } from "../../redux/userSlice";
import { useNavigate, Navigate } from "react-router-dom";

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
			if (user.user) {
				const response = await axios.get(
					`${process.env.REACT_APP_BACKEND_URL}/api/user/${user.user._id}`,
					config
				);
			}
		}

		getUser();
	}, []);
	if (!user.user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='container d-flex text-white bg-light flex-wrap justify-content-center profile-container'>
			<div class="container">
  <div class="row align-items-start">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
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
