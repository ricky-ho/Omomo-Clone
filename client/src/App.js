import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  HomePage,
  MenuPage,
  LocationsPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
} from "./pages";
import { CartContext } from "./contexts/CartState";
import { ItemState } from "./contexts/ItemState";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";

import "./App.scss";

const App = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/locations" component={LocationsPage} />
        <ItemState>
          <Route path="/menu" component={MenuPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout">
            {cart.length > 0 ? <CheckoutPage /> : <Redirect to="/cart" />}
          </Route>
        </ItemState>
        <Route to="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
