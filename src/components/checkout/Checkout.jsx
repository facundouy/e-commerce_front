import ShopBanner from "../shopBanner/ShopBanner";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  return (
    <>
      <ShopBanner bannerTitle={"CHECK OUT"} />
      <div className="container mb-4">
        <div className="d-flex flex-column justify-content-right">
          <div className="total-price">Total: ${totalPrice}</div>
          <form className="checkout-form" action="">
            <button type="button" className="checkout-btn mt-3">
              PAY
            </button>
            <div className="mt-2">Pay with your favourite method</div>
          </form>
        </div>

        <div class="separator my-3"> or </div>
      </div>
    </>
  );
}

export default Checkout;
