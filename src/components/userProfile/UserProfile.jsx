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
    <div className="container page-profile-container">
      <div className="profile-container">
        <img src="profile_default.png" />
        <span>
          {info.user.firstname.toUpperCase()} {info.user.lastname.toUpperCase()}
        </span>
        <p>Email: {info.user.email} </p>
        <p>Address: {info.user.address} </p>
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          LOG OUT
        </button>
      </div>

      <div className="col  profile-orders-container">
        <h4>YOUR ORDERS</h4>
        <Table className="table d-flex flex-wrap">
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
  );
}

export default UserProfile;
