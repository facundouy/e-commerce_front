import { useSelector } from "react-redux";
import { useEffect } from "react";

import "./checkout.css";

function Step1({
  setStep,
  inputFirstName,
  setInputFirstName,
  inputLastName,
  setInputLastName,
  inputEmail,
  setInputEmail,
  inputPhone,
  setInputPhone,
  inputAddress,
  setInputAddress,
}) {
  const info = useSelector((state) => state.user);
  console.log("info: ", info);

  useEffect(() => {
    setInputFirstName(info.user.firstname);
    setInputLastName(info.user.lastname);
    setInputEmail(info.user.email);
    setInputPhone(info.user.tel);
    setInputAddress(info.user.address);
  }, []);

  return (
    <>
      <h3 className="step-title">BILLING DETAILS</h3>
      <div className="container-billing-details">
        <label className="label" htmlFor="">
          First name*
        </label>
        <input
          className="input"
          type="text"
          value={inputFirstName}
          placeholder="Jane"
          onChange={(event) => setInputFirstName(event.target.value)}
        />

        <label className="label" htmlFor="">
          Last name*
        </label>
        <input
          className="input"
          type="text"
          value={inputLastName}
          placeholder="Doe"
          onChange={(event) => setInputLastName(event.target.value)}
        />
        <label className="label" htmlFor="">
          Address*
        </label>
        <input
          className="input"
          type="text"
          value={inputAddress}
          placeholder="Av. Gral. Libertador 1234"
          onChange={(event) => setInputAddress(event.target.value)}
        />
        <label className="label" htmlFor="">
          Phone number*
        </label>
        <input
          className="input"
          type="number"
          value={inputPhone}
          placeholder=" 099 123 456"
          onChange={(event) => setInputPhone(event.target.value)}
        />
        <label className="label" htmlFor="">
          Email*
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
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Step1;
