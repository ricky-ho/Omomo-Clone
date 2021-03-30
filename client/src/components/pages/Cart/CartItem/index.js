import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./style.css";

const CartItems = ({
  smallDisplay,
  items,
  incrementItemQuantity,
  decrementItemQuantity,
}) => {
  return items.map((item) => {
    return (
      <div
        className={`flex ${smallDisplay ? "cart-item-sm" : "cart-item"}`}
        key={item.id}
      >
        <div className="cart-item-image-container">
          <img src={item.imgMenu} alt={item.name} />
        </div>
        <div className="cart-item-info comm-text flex-col">
          <div>{item.name}</div>
          <div className="cart-item-quantity flex">
            <input
              type="number"
              min={1}
              max={10}
              value={item.count}
              placeholder="Quantity"
              readOnly
            />
          </div>
          <div className="font-brown">{`$${item.price.toFixed(2)}`}</div>
        </div>
        <div
          className="cart-item-btn increment flex"
          onClick={() => {
            incrementItemQuantity(item);
          }}
        >
          <FaPlus className="fa-plus" size="20px" color="#596c5a" />
        </div>
        <div
          className="cart-item-btn decrement flex"
          onClick={() => {
            decrementItemQuantity(item);
          }}
        >
          <FaMinus className="fa-minus" size="20px" color="#f00" />
        </div>
      </div>
    );
  });
};

export default CartItems;
