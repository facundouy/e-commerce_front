import ShopBanner from "../shopBanner/ShopBanner";
import { useState } from "react";
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

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

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
        {step1 && <Step1 setStep2={setStep2} />}
        {step2 && <Step2 setStep1={setStep1} setStep3={setStep3} />}
        {step3 && <Step3 setStep2={setStep2} />}
      </div>
    </>
  );
}

export default Checkout;
