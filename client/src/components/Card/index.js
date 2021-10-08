import { useContext } from "react";
import CartContext from "../../contexts/Cart/cart-context";
import "./style.scss";

const Card = ({ index, item }) => {
  const { removeFromCart } = useContext(CartContext);
  const { product, quantity } = item;

  return (
    <div className="card">
      <div className="card__image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="card__details">
        <div className="details__header">
          <h3>{product.name}</h3>
          <div>
            <button type="button">Edit</button>
            <button type="button" onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        </div>

        <div className="details__content">
          <div>{quantity}</div>
          <div>
            <p>Price:</p>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
