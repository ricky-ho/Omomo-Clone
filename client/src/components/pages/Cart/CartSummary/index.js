import React from "react";
import "./style.css";

const CartSummary = ({ smallDisplay, items, totalItems, totalPrice }) => {
  return (
    <section
      className="comm-text flex-col"
      id={smallDisplay ? "cart-summary-sm" : "cart-summary"}
    >
      <h2>ORDER SUMMARY</h2>
      <div className="flex-col">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex-col">
              <div className="item-breakdown flex">
                <div>{item.count} x</div>
                <div>{item.abbr}</div>
                <div>{`$${(item.count * item.price).toFixed(2)}`}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <p>SUBTOTAL: ({totalItems} items)</p>
        <p>{`$${totalPrice.toFixed(2)}`}</p>
      </div>
      {totalItems === 0 ? null : (
        <button type="button" className="checkout">
          PLACE ORDER
        </button>
      )}
    </section>
  );
};

export default CartSummary;
