import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer/";
import Home from "./pages/Home/";
import About from "./pages/About/";
import Menu from "./pages/Menu/";
import Locations from "./pages/Locations";
import Cart from "./components/Cart";
import CartIcon from "./components/Cart/CartIcon";
import ScrollToTop from "./pages/ScrollToTop";
import useSmallDisplay from "./utils/useSmallDisplay";
import {
  addToCart,
  calculateTotalCartItems,
  removeFromCart,
} from "./utils/cart";

import "./App.css";

/* Improvements to react-shopping-cart 
  - Moved images to an image CDN for image optimization/compression
  - Caching menu data in sessionStorage
  - Caching cart state in localStorage
  - Added options property to items 
*/

/* TODO 
  - MENU:
    - handle API error
  * Add 404 Error page
  * Add Locations page 
  * Create more modular code/components and optimize code
    - ModalForm, Footer
  - Improve accessibility
  ? Improve CSS use (grid, clamp, etc...)
*/

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
          path="/about"
          render={() => <About smallDisplay={smallDisplay} />}
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
      </Switch>
      <Cart
        smallDisplay={smallDisplay}
        cart={cart}
        cartQuantity={cartQuantity}
        handleRemoveFromCart={handleRemoveFromCart}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      {smallDisplay && (
        <CartIcon setShowCart={setShowCart} cartQuantity={cartQuantity} />
      )}
      <Footer smallDisplay={smallDisplay} />
    </div>
  );
};

export default App;
