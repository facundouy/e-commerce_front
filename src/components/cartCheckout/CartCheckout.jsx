import { useSelector } from "react-redux";
import "./cartCheckout.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CartCheckout({ total }) {
  const cart = useSelector((state) => state.cart);
  const checkOutHandler = () => {
    const response = async () => {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
        items: cart,
      });
    };
    console.log(response.data);
  };

  async function createOrder(event) {
    const productsName = [];
    for (const product of cart) {
      productsName.push(product.name);
    }
    const productsQuantity = [];
    for (const product of cart) {
      productsQuantity.push(product.quantity);
    }
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create/order`,
      {
        productsName: productsName,
        productsQuantity: productsQuantity,
      }
    );
    console.log(response.data);
  }

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
      <Link to="/checkout">
        <button
          className="checkout-btn"
          onClick={() => {
            checkOutHandler();
            createOrder();
          }}
        >
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </div>
  );
}

export default CartCheckout;
