import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import Loader from "../../components/Loader";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import CheckoutSuccess from "./CheckoutSuccess";
import { CartContext } from "../../contexts/CartState";
import { validateCartTotal } from "../../utils/checkoutUtils";

import "./style.scss";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  /* TODO:
    1. Create Demos for auto-fill contact/payment details
    2. Handle successful payments and unsuccessful payments in UI
    3. Display error messages depending on error type under CheckoutSummary
  */

  const [status, setStatus] = useState("ready");
  const [subtotal, setSubtotal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  useEffect(() => {
    validateCartTotal(cart)
      .then((response) => setSubtotal(response.totalPrice))
      .catch((err) => setPaymentError(err))
      .finally(() => setIsLoading(false));
  }, [cart]);

  const handlePaymentErrorMessage = () => {
    if (!paymentError) return null;

    switch (paymentError.type) {
      case "invalid_request_error":
        return paymentError.message;

      default:
        return "Payment was declined. Please choose a different payment method and try again";
    }
  };

  if (status === "succeeded") {
    return <CheckoutSuccess />;
  }

  return (
    <main id="checkout">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="checkout__container">
          <div className="checkout__header">
            <Link to="/menu">
              <FiChevronLeft size={18} />
              <span>Continue Shopping</span>
            </Link>
          </div>
          <div className="checkout__content">
            <CheckoutForm
              {...{
                subtotal,
                isProcessing,
                setIsProcessing,
                setPaymentError,
                setStatus,
              }}
            />
            <CheckoutSummary
              {...{
                subtotal,
                isProcessing,
                paymentError,
                handlePaymentErrorMessage,
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default CheckoutPage;
