import ShopBanner from "../shopBanner/ShopBanner";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";
import Step1 from "./Step1";
import Step2 from "./Step2";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const [order, setOrder] = useState({});
  const [step, setStep] = useState("1");
  console.log("Step:", step);
  return (
    <>
      <ShopBanner bannerTitle={"CHECKOUT"} />
      <div className="container mb-4">
        {step === "1" && <Step1 setStep={setStep} setOrder={setOrder} />}
        {step === "2" && (
          <Step2
            setStep={setStep}
            // setStep2={setStep2}
            // setStep3={setStep3}
            // setOrder={setOrder}
          />
        )}
        {/* {step3 && <Step3 setStep2={setStep2} setStep3={setStep3} setOrder={setOrder} />} */}
      </div>
    </>
  );
}

export default Checkout;
