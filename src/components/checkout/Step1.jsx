import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./checkout.css";

function Step1({ setStep }, setOrder) {
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  return (
    <>
      <h1>BILLING DETAILS</h1>
      <div className="container-billing-details">
        <label className="label" htmlFor="">
          First Name
        </label>
        <input
          className="input"
          type="text"
          value={inputFirstName}
          placeholder="Jane"
          onChange={(event) => setInputFirstName(event.target.value)}
        />

        <label className="label" htmlFor="">
          Last Name
        </label>
        <input
          className="input"
          type="text"
          value={inputLastName}
          placeholder="Doe"
          onChange={(event) => setInputLastName(event.target.value)}
        />
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
        <label className="label" htmlFor="">
          Address
        </label>
        <input
          className="input"
          type="text"
          value={inputAddress}
          placeholder="Av. Gral. Libertador 0000"
          onChange={(event) => setInputAddress(event.target.value)}
        />
        <label className="label" htmlFor="">
          Phone number
        </label>
        <input
          className="input"
          type="number"
          value={inputPhone}
          placeholder=" 099 123 456"
          onChange={(event) => setInputPhone(event.target.value)}
        />
        <label className="label" htmlFor="">
          Email
        </label>
        <input
          className="input"
          type="text"
          value={inputEmail}
          placeholder="example@example.com"
          onChange={(event) => setInputEmail(event.target.value)}
        />
        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep("2");
            // setOrder({});
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Step1;
