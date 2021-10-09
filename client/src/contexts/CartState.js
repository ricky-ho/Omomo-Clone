import { useReducer } from "react";

import CartContext from "./cart-context";
import cartReducer from "../reducers/cart-reducer";
import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "../reducers/cart-actions";

const CartState = ({ children }) => {
  const initialState = {
    cart: [], // { id, quantity, modifications }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const editCartItem = (product_id) => {
    dispatch({
      type: EDIT_ITEM,
      payload: product_id,
    });
  };

  const removeFromCart = (index) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: index,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        editCartItem,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
