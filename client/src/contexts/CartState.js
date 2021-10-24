import { useEffect, useReducer, createContext } from "react";
import cartReducer from "./reducers/cart-reducer";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  CALCULATE_TOTAL_PRICE,
  CALCULATE_TOTAL_ITEMS,
  CLEAR_CART,
} from "./actions/cart-actions";
import { getLocalStorage } from "../utils/cartUtils";

export const CartContext = createContext();

export const CartState = ({ children }) => {
  let initialState = {
    cart: getLocalStorage(),
    totalPrice: 0,
    totalItems: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const calculateTotalPrice = () => {
      dispatch({
        type: CALCULATE_TOTAL_PRICE,
      });
    };

    const calculateTotalItems = () => {
      dispatch({
        type: CALCULATE_TOTAL_ITEMS,
      });
    };

    calculateTotalPrice();
    calculateTotalItems();
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state]);

  const addToCart = (item) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const editCartItem = (cartIndex, item) => {
    dispatch({
      type: EDIT_ITEM,
      payload: { cartIndex, item },
    });
  };

  const removeFromCart = (index) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: index,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalPrice: state.totalPrice,
        totalItems: state.totalItems,
        addToCart,
        editCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
