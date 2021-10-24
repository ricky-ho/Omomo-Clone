import { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { FaLock } from "react-icons/fa";
import { BiChevronsDown, BiChevronsUp, BiCheckShield } from "react-icons/bi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "./style.scss";

const PaymentField = () => {
  return (
    <fieldset className="checkout-form__payment-field">
      <legend>
        <p>
          SECURE PAYMENT
          <span>
            <FaLock size={11} />
          </span>
        </p>
        <p>
          All payments are secured and handled by{" "}
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe
          </a>
        </p>
      </legend>

      <div className="form-row" id="card-element">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "black",
              },
              invalid: {
                color: "red",
                iconColor: "red",
              },
            },
          }}
        />
      </div>
      <DemoPaymentInfo />
    </fieldset>
  );
};

const DemoPaymentInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="payment-demo">
      <div className="demo-info-container">
        <button
          type="button"
          className="demo-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Demo - Payment Information</span>
          <span>
            {isOpen ? <BiChevronsUp size={16} /> : <BiChevronsDown size={16} />}
          </span>
        </button>
        <div className={`demo-content ${isOpen ? "demo-expand" : ""}`}>
          <div className="demo-instruction">
            For demonstration purposes, the following test card numbers have
            been provided. Enter any valid expiration date in the future, any
            random CVC number, and any zip code.
          </div>
          <ul>
            <li data-demo-card="success">
              <div className="demo-item-icon">
                <AiOutlineCheckCircle size={16} />
              </div>
              <div className="demo-item-info">
                <span>Successful Payment:</span>
                <span>4242 4242 4242 4242</span>
              </div>
            </li>
            <li data-demo-card="fail">
              <div className="demo-item-icon">
                <AiOutlineCloseCircle size={16} />
              </div>
              <div className="demo-item-info">
                <span>Unsuccessful Payment:</span>
                <span>4000 0000 0000 0101</span>
              </div>
            </li>
            <li data-demo-card="3ds">
              <div className="demo-item-icon">
                <BiCheckShield size={16} />
              </div>
              <div className="demo-item-info">
                <span>3DS Payment:</span>
                <span>4000 0027 6000 3184</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentField;
