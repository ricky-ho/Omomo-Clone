import { useContext } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

import CardContent from "./CardContent";
import { CartContext } from "../../contexts/CartState";
import { calculateTotalItemPrice } from "../../utils/cartUtils";

import "./style.scss";

const Card = ({ index, item, toggleModal, editCartItem }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleClick = () => {
    editCartItem(index);
    toggleModal();
  };

  const CardHeader = () => {
    return (
      <div className="details__header">
        <h3>{item.product.name}</h3>
        <div>
          <button
            type="button"
            className="item__edit"
            title={item.product.name}
            onClick={handleClick}
          >
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
        <span>{`$${calculateTotalItemPrice(
          item,
          item.quantity,
          item.modifications
        ).toFixed(2)}`}</span>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={item.product.imageURL} alt={item.product.name} />
      </div>
      <div className="card__details">
        <CardHeader />
        <CardContent {...{ index, item }} />
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;
