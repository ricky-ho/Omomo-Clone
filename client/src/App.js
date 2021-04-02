import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Home from "./pages/Home/";
import About from "./pages/About/";
import Menu from "./pages/Menu/";
import Cart from "./pages/Cart/";
import ScrollToTop from "./pages/ScrollToTop";
import useSmallDisplay from "./utils/useSmallDisplay";

import "./App.css";

/* Improvements to react-shopping-cart 
  - Moving images to an image CDN for image optimization
  - Caching menu data 
  - 
*/

/* TODO 
  - Persist cart state through LocalStorage
  - Change cart logic to be more practical
  - Retrieve menu data from API
    - Save menu data in cache to prevent re-fetching everytime we load menu page
  - Create more modular code/components
*/

const App = () => {
  /* Display */
  const smallDisplay = useSmallDisplay();

  /* Cart Functionality */
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item, quantity) => {
    const _cartItems = [...cartItems];
    let inCart = false;
    _cartItems.forEach((cartItem) => {
      if (cartItem._id === item._id) {
        if (cartItem.count + quantity < 10) {
          cartItem.count += quantity;
        } else {
          cartItem.count = 10;
        }
        inCart = true;
      }
    });
    if (!inCart) {
      _cartItems.push({ ...item, count: quantity });
    }
    calculateTotals(_cartItems);
    setCartItems(_cartItems);
  };

  const decrementItemQuantity = (item) => {
    item.count -= 1;
    let _cartItems = [...cartItems];
    if (item.count === 0) {
      _cartItems = [...cartItems].filter(
        (cartItem) => cartItem._id !== item._id
      );
    }
    calculateTotals(_cartItems);
    setCartItems(_cartItems);
  };

  const incrementItemQuantity = (item) => {
    if (item.count < 10) {
      item.count += 1;
      let _cartItems = [...cartItems];
      calculateTotals(_cartItems);
      setCartItems(_cartItems);
    }
  };

  const calculateTotals = (cartItems) => {
    let runningPrice = 0;
    let runningItems = 0;
    cartItems.forEach((item) => {
      runningPrice += item.count * item.price;
      runningItems += item.count;
    });
    setTotalItems(runningItems);
    setTotalPrice(runningPrice);
  };

  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Header smallDisplay={smallDisplay} />
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
            <Menu smallDisplay={smallDisplay} addToCart={addToCart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              smallDisplay={smallDisplay}
              cartItems={cartItems}
              decrementItemQuantity={decrementItemQuantity}
              incrementItemQuantity={incrementItemQuantity}
              totalItems={totalItems}
              totalPrice={totalPrice}
            />
          )}
        />
      </Switch>
      <Footer smallDisplay={smallDisplay} />
    </div>
  );
};

export default App;
