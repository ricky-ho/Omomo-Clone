import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import Loader from "../../components/Loader";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { CartContext } from "../../contexts/CartState";
import { validateCartTotal } from "../../utils/checkoutUtils";

import "./style.scss";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  /* TODO:
    1. Create Demos for auto-fill contact/payment details
    2. Handle successful payments and unsuccessful payments in UI
    3. Display error messages depending on error type
  */

  // const [ status, setStatus ] = useState("ready");
  const [subtotal, setSubtotal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    validateCartTotal(cart)
      .then((response) => setSubtotal(response.totalPrice))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [cart]);

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
              {...{ subtotal, isProcessing, setIsProcessing, setError }}
            />
            <CheckoutSummary {...{ subtotal, isProcessing, error }} />
          </div>
        </div>
      )}
    </main>
  );
};

export default CheckoutPage;
