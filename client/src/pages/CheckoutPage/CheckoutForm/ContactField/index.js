import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { formatPhoneNumber } from "../../../../utils/formUtils";
import {
  validNameInput,
  validPhoneInput,
  validEmailInput,
} from "../../../../utils/formUtils";

import "./style.scss";

const ContactField = ({
  isProcessing,
  formErrorMessages,
  setFormErrorMessages,
}) => {
  const handleAndFormatPhoneInput = (e) => {
    const userInput = e.target.value;
    const formattedPhoneNumber = formatPhoneNumber(userInput);
    e.target.value = formattedPhoneNumber;
  };

  const validateNameInput = (e) => {
    const input = e.target.value;
    const isValid = validNameInput(input);

    if (!isValid) {
      setFormErrorMessages({
        ...formErrorMessages,
        name: "Please provide your first and last name",
      });
      return;
    }

    setFormErrorMessages({
      ...formErrorMessages,
      name: null,
    });
  };

  const validatePhoneInput = (e) => {
    const input = e.target.value;
    const isValid = validPhoneInput(input);

    if (!isValid) {
      setFormErrorMessages({
        ...formErrorMessages,
        phone: "Please provide a valid phone number",
      });
      return;
    }

    setFormErrorMessages({
      ...formErrorMessages,
      phone: null,
    });
  };

  const validateEmailInput = (e) => {
    const input = e.target.value;
    const isValid = validEmailInput(input);

    if (!isValid) {
      setFormErrorMessages({
        ...formErrorMessages,
        email: "Please provide a valid email address",
      });
      return;
    }

    setFormErrorMessages({
      ...formErrorMessages,
      email: null,
    });
  };

  return (
    <fieldset className="checkout-form__contact-field">
      <legend>
        <p>CONTACT INFORMATION</p>
      </legend>

      <div className="form-row">
        <div className="row-inputs">
          <div>
            <label htmlFor="input_firstName">First Name</label>
            <input
              type="text"
              id="input_firstName"
              className={`${formErrorMessages.name ? "input-error" : ""}`}
              name="firstName"
              onBlur={validateNameInput}
              disabled={isProcessing}
            />
          </div>
          <div>
            <label htmlFor="input_lastName">Last Name</label>
            <input
              type="text"
              id="input_lastName"
              className={`${formErrorMessages.name ? "input-error" : ""}`}
              name="lastName"
              onBlur={validateNameInput}
              disabled={isProcessing}
            />
          </div>
        </div>
        <div id="name-error" className="error-message">
          {formErrorMessages.name ? (
            <p>
              <span>
                <BsFillExclamationTriangleFill size={14} />
              </span>
              <span>{formErrorMessages.name}</span>
            </p>
          ) : null}
        </div>
      </div>
      <div className="form-row">
        <div className="row-inputs">
          <div>
            <label htmlFor="input_phone">Phone</label>
            <input
              type="tel"
              id="input_phone"
              className={`${formErrorMessages.phone ? "input-error" : ""}`}
              name="phone"
              onChange={handleAndFormatPhoneInput}
              onBlur={validatePhoneInput}
              disabled={isProcessing}
            />
          </div>
        </div>
        <div id="phone-error" className="error-message">
          {formErrorMessages.phone ? (
            <p>
              <span>
                <BsFillExclamationTriangleFill size={14} />
              </span>
              <span>{formErrorMessages.phone}</span>
            </p>
          ) : null}
        </div>
      </div>
      <div className="form-row">
        <div className="row-inputs">
          <div>
            <label htmlFor="input_email">Email</label>
            <input
              type="text"
              inputMode="email"
              id="input_email"
              className={`${formErrorMessages.email ? "input-error" : ""}`}
              name="email"
              onBlur={validateEmailInput}
              disabled={isProcessing}
            />
          </div>
        </div>
        <div id="email-error" className="error-message">
          {formErrorMessages.email ? (
            <p>
              <span>
                <BsFillExclamationTriangleFill size={14} />
              </span>
              <span>{formErrorMessages.email}</span>
            </p>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
};

export default ContactField;
