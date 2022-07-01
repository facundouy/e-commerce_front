import { useSelector } from "react-redux";
import "./cartCheckout.css";
import axios from "axios";

function CartCheckout({ total }) {
  const items = useSelector((state) => state.cart);
  const checkOutHandler = () => {
    const response = async () => {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
        items: items,
      });
    };
    console.log(response.data);
  };
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">CART TOTALS</h2>
      <table className="checkout-table">
        <tr className="checkout-table-row">
          <td className="checkout-table-cell">Subtotal</td>
          <td className="checkout-table-cell">${total}</td>
        </tr>
        <tr className="checkout-table-row">
          <td className="checkout-table-cell">Total</td>
          <td className="checkout-table-cell">${total}</td>
        </tr>
      </table>

      <button
        className="checkout-btn"
        onClick={() => {
          checkOutHandler();
        }}
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default CartCheckout;
