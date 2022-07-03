import { useSelector } from "react-redux";
import "./cartCheckout.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CartCheckout({ total }) {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  console.log(totalPrice);
  const checkOutHandler = () => {
    const response = async () => {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
        items: cart,
      });
    };
    // console.log(response.data);
  };

  async function createOrder(event) {
    const products = [];
    cart.map((product) => {
      products.push({
        name: product.name,
        quantity: product.quantity,
        price: product.price * product.quantity,
      });
    });
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/create/order`,
      {
        products,
        totalPrice: totalPrice,
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
          <td className="check out-table-cell">${total}</td>
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
