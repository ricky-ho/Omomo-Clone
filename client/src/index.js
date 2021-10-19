import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CartState } from "./contexts/CartState";
import App from "./App";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <CartState>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CartState>
  </BrowserRouter>,
  document.getElementById("root")
);
