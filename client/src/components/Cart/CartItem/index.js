import ItemOptions from "./ItemOptions";
import "./style.css";

const CartItem = ({ smallDisplay, index, item, handleRemoveFromCart }) => {
  return (
    <article className="product-card">
      <img src={item.imgMenu} alt={item.name} className="product-image" />
      <section className="product-info">
        <div className="info-row info-head">
          <h1>{item.name}</h1>
          <p>{`$${(item.quantity * item.totalPrice).toFixed(2)}`}</p>
        </div>
        <div className="info-row info-quantity">
          <input
            type="number"
            min={1}
            max={10}
            value={item.quantity}
            readOnly
          />
        </div>
        <div className="info-row">
          <ItemOptions item={item} />
        </div>
      </section>
      <button
        id="remove-btn"
        onClick={() => {
          handleRemoveFromCart(index);
        }}
      >
        <p>Remove</p>
      </button>
    </article>
  );
};

export default CartItem;
