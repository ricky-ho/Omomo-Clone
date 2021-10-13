import { Switch, Route } from "react-router-dom";

import { CartState } from "./contexts/CartState";
import { ItemState } from "./contexts/ItemState";
import {
  HomePage,
  MenuPage,
  LocationsPage,
  CartPage,
  ErrorPage,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <CartState>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/locations" component={LocationsPage} />
          <ItemState>
            <Route path="/menu" component={MenuPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={null} />
          </ItemState>
          <Route to="*" component={ErrorPage} />
        </Switch>
      </CartState>
      <Footer />
    </div>
  );
};

export default App;
