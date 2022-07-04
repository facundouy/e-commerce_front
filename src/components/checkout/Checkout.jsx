import ShopBanner from "../shopBanner/ShopBanner";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const step2states = {
  1: "next",
  2: "selected",
  3: "completed",
};

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  const [order, setOrder] = useState({});
  const [step, setStep] = useState("1");
  return (
    <>
      <ShopBanner bannerTitle={"CHECKOUT"} />
      <div className="container mb-4">
        <div className="steps-icons-container">
          <div className="step-container">
            <div
              className={`diamond ${step === "1" ? "selected" : "completed"}`}
            >
              <span>1</span>
            </div>
            <small>Billing details</small>
          </div>
          <div className={`line${step > "1" ? " completed" : ""}`} />

          <div className="step-container">
            <div className={`diamond ${step2states[step]}`}>
              <span>2</span>
            </div>
            <small>Payment method</small>
          </div>
          <div className={`line${step > "2" ? " completed" : ""}`} />

          <div className="step-container">
            <div className={`diamond ${step === "3" ? "selected" : "next"}`}>
              <span>3</span>
            </div>
            <small>Review order</small>
          </div>
        </div>
        {step === "1" && <Step1 setStep={setStep} setOrder={setOrder} />}
        {step === "2" && <Step2 setStep={setStep} setOrder={setOrder} />}
        {step === "3" && <Step3 setStep={setStep} setOrder={setOrder} />}
      </div>
    </>
  );
}

export default Checkout;
