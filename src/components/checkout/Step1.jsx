import { useSelector, useDispatch } from "react-redux";
import "./checkout.css";

function Step1() {
  return (
    <>
      <h1>BILLING DETAILS</h1>
      <div className="container-billing-details">
        <label className="label" htmlFor="firstName">
          First Name*
        </label>
        <input
          type="text"
          className="input"
          name="firstName"
          placeholder="Jane"
        />

        <label className="label" htmlFor="lastName">
          Last Name*
        </label>
        <input
          type="text"
          className="input"
          name="lastName"
          placeholder="Doe"
        />

        <label className="label" htmlFor="city">
          City*
        </label>
        <input type="text" className="input" name="city" />

        <label className="label">Street Address*</label>
        <input
          type="text"
          className="input"
          placeholder="Av. Gral. Libertador 0000"
        />

        <label className="label">Postcode / ZIP*</label>
        <input type="text" className="input" placeholder="11300" />

        <label className="label">Email address*</label>
        <input
          type="text"
          className="input"
          placeholder="example@example.com"
        />

        <label className="label">Phone*</label>
        <input type="text" className="input" placeholder=" 099 000 000" />

        <label className="label" htmlFor="">
          Additional information
        </label>
        <textarea type="text" className="input" />

        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep1(false);
            setStep2(true);
            setOrder;
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Step1;
