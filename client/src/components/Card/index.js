import { useContext } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

import CartContext from "../../contexts/cart-context";
import CardContent from "./CardContent";
import "./style.scss";

const Card = ({ index, item }) => {
  const { removeFromCart } = useContext(CartContext);
  const { product } = item;

  const CardHeader = () => {
    return (
      <div className="details__header">
        <h3>{product.name}</h3>
        <div>
          <button type="button" className="item__edit" title={product.name}>
            Edit Item
          </button>
          <button
            type="button"
            className="item__remove"
            onClick={() => removeFromCart(index)}
          >
            <AiOutlineCloseSquare size={30} />
          </button>
        </div>
      </div>
    );
  };

  const CardFooter = () => {
    return (
      <div className="details__footer">
        <span>Subtotal:</span>
        <span>{`$${product.price.toFixed(2)}`}</span>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="card__details">
        <CardHeader />
        <CardContent {...{ item }} />
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;
