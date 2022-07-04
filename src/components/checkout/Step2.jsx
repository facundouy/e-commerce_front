import { useState } from "react";
import "./checkout.css";

function Step2({ setStep, setOrder }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  return (
    <>
      <h3 className="step-title">PAYMENT METHOD</h3>
      <div className="container-billing-details">
        <div className="payment-method">
          <div className="payment-method">
            <input type="radio" onClick={() => setPaymentMethod("credit")} />
            <label className="payment-method-label">Credit Card</label>
          </div>

          <div className="payment-method">
            <div className="credit-card" />
            <div className="credit-card" />
            <div className="credit-card" />
          </div>
        </div>
        {paymentMethod === "credit" && (
          <>
            <p className="payment-method-info">
              Safe money transfer using your bank account. Visa, Master Card,
              American Express.
            </p>
            <label className="label" htmlFor="">
              Card number
            </label>
            <div className="credit-card-container">
              <input
                placeholder="0000 0000 0000 0000"
                type="text"
                className="input input-credit-card"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <div className="credit-card credit-card-input" />
            </div>

            <label className="label" htmlFor="">
              Name on card
            </label>
            <div className="credit-card-container">
              <input
                type="text"
                className="input input-credit-card"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </div>

            <label className="label" htmlFor="">
              Expiry date
            </label>
            <div className="credit-card-container">
              <input
                placeholder="MM/YY"
                type="text"
                className="input input-credit-card"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </div>

            <label className="label" htmlFor="">
              CVV Code
            </label>
            <div className="credit-card-container">
              <input
                type="text"
                className="input input-credit-card"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
            </div>
          </>
        )}
        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep("1");
            // setOrder({});
          }}
        >
          PREVIOUS
        </button>
        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep("3");
            // setOrder({});
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Step2;
