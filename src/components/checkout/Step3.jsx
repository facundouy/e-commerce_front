import { useState } from "react";
import "./checkout.css";

function Step2({ setStep, setOrder }) {
  const [inputAddress, setInputAddress] = useState("");
  return (
    <>
      <h3 className="step-title">REVIEW ORDER</h3>
      <div className="container-billing-details">
        <label className="label" htmlFor="">
          Address
        </label>
        <input
          className="input"
          type="text"
          value={inputAddress}
          placeholder="Av. Gral. Libertador 1234"
          onChange={(event) => setInputAddress(event.target.value)}
        />

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
          className="checkout-btn mt-3"
          onClick={() => {
            // setStep("3");
            // setOrder({});
          }}
        >
          FINISH
        </button>
      </div>
    </>
  );
}

export default Step2;
