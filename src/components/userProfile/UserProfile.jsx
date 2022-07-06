import { useSelector, useDispatch } from "react-redux";
import "./userProfile.css";
import { logout } from "../../redux/userSlice";
import { useNavigate, Navigate } from "react-router-dom";

function UserProfile() {
	const info = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	if (!info.user) {
		return <Navigate to='/' />;
	}
	return (
		<div className='container profile-container mb-5'>
			<div className='row align-items-center'>
				<div className='col text-center'>
					<div className='profile-card'>
						<h4 className='name mb-3'>
							{info.user.firstname} {info.user.lastname}
						</h4>
						<img
							className='profile-pic mb-3'
							src='profile_default.png'
							alt='profile'
						/>
						<div className='email mb-3'>{info.user.email}</div>
						<div className='address mb-5'>{info.user.address}</div>
						<button
							className='btn-logout'
							onClick={() => {
								dispatch(logout());
								navigate("/");
							}}>
							Logout
						</button>
					</div>
				</div>
				<div className='col sm-col-12'>
					<h4>Your product orders</h4>
					<table className='table'>
						<thead>
							<tr>
								<th scope='col'>STATUS</th>
								<th scope='col'>DATE</th>
								<th scope='col'>PRODUCTS</th>
								<th scope='col'>TOTAL</th>
							</tr>
						</thead>
						<tbody>
							{info.user.orderList.map((order) => {
								return (
									<tr>
										<td>{order.status}</td>
										<td>{order.date}</td>
										<td>{order.products}</td>
										<td>{order.totalPrice}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
