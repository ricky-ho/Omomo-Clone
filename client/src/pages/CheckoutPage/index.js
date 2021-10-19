import { useEffect, useContext, useState } from "react";

import Loader from "../../components/Loader";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { CartContext } from "../../contexts/CartState";
import { validateCartTotal } from "../../utils/checkoutUtils";

import "./style.scss";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [ isProcessing, setIsProcessing ] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    validateCartTotal(cart)
      .then((response) => setSubtotal(response.totalPrice))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main id="checkout">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Checkout Page</h1>
          <div className="checkout__content">
            <CheckoutForm {...{ subtotal, setError }} />
            <CheckoutSummary {...{ subtotal }} />
          </div>
        </>
      )}
    </main>
  );
};

export default CheckoutPage;
