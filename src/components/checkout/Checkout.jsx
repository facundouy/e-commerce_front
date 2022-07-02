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
      <ShopBanner bannerTitle={"CHECKOUT"} />
      <div className="container mb-4">
        {/* <div className="d-flex flex-column justify-content-right">
          <div className="total-price">Total: ${totalPrice}</div>
          <form className="checkout-form" action="">
            <button type="button" className="checkout-btn mt-3">
              PAY
            </button>
            <div className="mt-2">Pay with your favourite method</div>
          </form>
        </div>

        <div class="separator my-3"> or </div> */}
        <h1>BILLING DETAILS</h1>
        <div className="container-billing-details">
          <form action="">
            <label className="label" placeholder="Jane">
              First Name*
            </label>
            <input type="text" className="input" />
            <label className="label" placeholder="Doe">
              Last Name*
            </label>
            <input type="text" className="input" />
            <label className="label" htmlFor="">
              Country*
            </label>
            <select type="text" className="input">
              <option value=""></option>
              <option value="peru">Peru</option>
              <option value="uruguay">Uruguay</option>
              <option value="usa">United States</option>
            </select>
            <label className="label" htmlFor="">
              City*
            </label>
            <input type="text" className="input" />
            <label className="label" placeholder="Av. Gral. Libertador 0000">
              Street Address*
            </label>
            <input type="text" className="input" />
            <label className="label" placeholder="11300">
              Postcode / ZIP*
            </label>
            <input type="text" className="input" />
            <label className="label" placeholder="example@example.com">
              Email address*
            </label>
            <input type="text" className="input" />
            <label className="label" placeholder=" 099 000 000">
              Phone*
            </label>
            <input type="text" className="input" />
            <label className="label" htmlFor="">
              Additional information
            </label>
            <textarea type="text" className="input" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Checkout;
