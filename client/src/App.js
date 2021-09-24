import { Switch, Route } from "react-router-dom";

import CartState from "./contexts/Cart/CartState";
import {
  HomePage,
  MenuPage,
  LocationsPage,
  CartPage,
  ErrorPage,
} from "./pages";
import useSmallDisplay from "./hooks/useSmallDisplay";
import ScrollToTop from "./utils/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";

import "./App.scss";

const App = () => {
  const smallDisplay = useSmallDisplay();

  return (
    <div className="App">
      <ScrollToTop />
      <CartState>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/locations" component={LocationsPage} />
          <Route path="/cart" component={CartPage} />
          <Route to="*" component={ErrorPage} />
        </Switch>
      </CartState>
      <Footer smallDisplay={smallDisplay} />
    </div>
  );
};

export default App;
