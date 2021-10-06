import { useReducer } from "react";

import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "./cart-actions";
import CartContext from "./cart-context";
import cartReducer from "./cart-reducer";

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
