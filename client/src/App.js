import { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  HomePage,
  MenuPage,
  LocationsPage,
  CartPage,
  CheckoutPage,
  OrderConfirmPage,
  NotFoundPage,
} from "./pages";
import { CartContext } from "./contexts/CartState";
import { ItemState } from "./contexts/ItemState";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";
import Popup from "./components/Popup";

import "./App.scss";

const App = () => {
  const { cart } = useContext(CartContext);

  const [status, setStatus] = useState("ready");
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Popup {...{ showPopup, setShowPopup }} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/locations" component={LocationsPage} />
        <ItemState>
          <Route path="/menu">
            <MenuPage {...{ setShowPopup }} />{" "}
          </Route>
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout">
            {cart.length > 0 ? (
              <CheckoutPage setAppStatus={setStatus} />
            ) : (
              <Redirect to="/cart" />
            )}
          </Route>
          <Route path="/order-confirmation">
            {status === "succeeded" ? (
              <OrderConfirmPage setAppStatus={setStatus} />
            ) : (
              <Redirect to="/cart" />
            )}
          </Route>
          <Route component={NotFoundPage} />
        </ItemState>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
