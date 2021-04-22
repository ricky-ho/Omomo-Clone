import React, { useState, useEffect } from "react";
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
import useSmallDisplay from "./utils/useSmallDisplay";
import {
  addToCart,
  calculateTotalCartItems,
  removeFromCart,
} from "./utils/cart";
import "./App.css";

const App = () => {
  const CART_LIMIT = 10;
  const smallDisplay = useSmallDisplay();

  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const prev_cart = localStorage.getItem("cart");
    if (prev_cart) setCart(JSON.parse(prev_cart));
  }, []);

  useEffect(() => {
    const quantity = calculateTotalCartItems(cart);
    setCartQuantity(quantity);
  }, [cart]);

  const handleAddToCart = (item, quantity) => {
    if (cartQuantity < 10) {
      const newCart = addToCart(cart, item, quantity);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (index) => {
    const newCart = removeFromCart(cart, index);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

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
