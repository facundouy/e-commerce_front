import { useSelector } from "react-redux";
import "./checkout.css";

import Table from "react-bootstrap/Table";

function Step3({ setStep, setOrder }) {
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  return (
    <>
      <h3 className="step-title">REVIEW ORDER</h3>
      <div className="container-billing-details">
        <Table className="table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr>
                  <td>
                    <img
                      className="image-item-cart"
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
                      alt="imagen"
                    />
                    {product.name}
                  </td>
                  <td>{product.quantity}</td>
                  <td>${product.price * product.quantity}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td>
                <h3 className="step3-total">TOTAL</h3>
              </td>
              <td>
                <h3 className="step3-total">${totalPrice}</h3>
              </td>
            </tr>
          </tbody>
        </Table>

        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep("2");
            // setOrder({});
          }}
        >
          PREVIOUS
        </button>

        <button
          type="button"
          className="checkout-btn mt-3 ms-4"
          onClick={() => {
            // setOrder({});
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </>
  );
}

export default Step3;
