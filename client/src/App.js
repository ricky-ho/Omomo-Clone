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
        <Route exact path="/locations" component={LocationsPage} />
        <Route path="/menu">
          <ItemState>
            <MenuPage {...{ setShowPopup }} />{" "}
          </ItemState>
        </Route>
        <Route path="/cart">
          <ItemState>
            <CartPage />
          </ItemState>
        </Route>
        <Route path="/checkout">
          <ItemState>
            {cart.length > 0 ? (
              <CheckoutPage setAppStatus={setStatus} />
            ) : (
              <Redirect to="/cart" />
            )}
          </ItemState>
        </Route>
        <Route path="/order-confirmation">
          {status === "succeeded" ? (
            <OrderConfirmPage setAppStatus={setStatus} />
          ) : (
            <Redirect to="/cart" />
          )}
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
