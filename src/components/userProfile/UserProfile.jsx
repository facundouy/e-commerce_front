import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./userProfile.css";
import { logout } from "../../redux/userSlice";
import { useNavigate, Navigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import OrderModal from "./OrderModal";

function UserProfile() {
  const info = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentOrder, setCurrentOrder] = useState(false);

  if (!info.user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container profile-container mb-5">
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="profile-card">
            <h4 className="name mb-3">
              {info.user.firstname} {info.user.lastname}
            </h4>
            <img
              className="profile-pic mb-3"
              src="profile_default.png"
              alt="profile"
            />
            <div className="email mb-3">{info.user.email}</div>
            <div className="address mb-5">{info.user.address}</div>
            <button
              className="btn-logout"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="col sm-col-12">
          <h4>Your product orders</h4>

          <Table className="table">
            <thead>
              <tr className="table-row">
                <th>STATUS</th>
                <th>DATE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {info.user.orderList.map((order) => {
                return (
                  <tr
                    key={order._id}
                    className="table-row order-table"
                    onClick={() => setCurrentOrder(order)}
                  >
                    <td>{order.status}</td>
                    <td>{order.date}</td>
                    <td>{order.totalPrice}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <OrderModal
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
