import { Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "./pages/Home/";
import Menu from "./pages/Menu/";
import Locations from "./pages/Locations";
import ErrorPage from "./pages/Error";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";
import Cart from "./components/Cart";
import CartIcon from "./components/Cart/CartIcon";
import ScrollToTop from "./utils/ScrollToTop";
import useSmallDisplay from "./hooks/useSmallDisplay";
import useCart from "./hooks/useCart";
import "./App.css";

const App = () => {
  const smallDisplay = useSmallDisplay();
  const {
    CART_LIMIT,
    cart,
    cartQuantity,
    showCart,
    setShowCart,
    handleAddToCart,
    handleRemoveFromCart,
  } = useCart();

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar
        smallDisplay={smallDisplay}
        cartQuantity={cartQuantity}
        setShowCart={setShowCart}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home smallDisplay={smallDisplay} />}
        />
        <Route
          path="/menu"
          render={() => (
            <Menu
              smallDisplay={smallDisplay}
              cartLimit={CART_LIMIT}
              cartQuantity={cartQuantity}
              handleAddToCart={handleAddToCart}
            />
          )}
        />
        <Route
          path="/locations"
          render={() => <Locations smallDisplay={smallDisplay} />}
        />
        <Route to="*" component={ErrorPage} />
      </Switch>
      {smallDisplay && (
        <CartIcon setShowCart={setShowCart} cartQuantity={cartQuantity} />
      )}
      <CSSTransition
        in={showCart}
        timeout={200}
        classNames="visible"
        unmountOnExit
      >
        <Cart
          smallDisplay={smallDisplay}
          cart={cart}
          cartQuantity={cartQuantity}
          handleRemoveFromCart={handleRemoveFromCart}
          showCart={showCart}
          setShowCart={setShowCart}
        />
      </CSSTransition>
      <Footer smallDisplay={smallDisplay} />
    </div>
  );
};

export default App;
