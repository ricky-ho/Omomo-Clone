import Card from "../../../components/Card";

const CartList = ({ toggleModal, editCartItem, cart }) => {
  return (
    <section className="cart__list">
      {cart?.length > 0 ? (
        <div className="cart__items">
          {cart.map((cartItem, index) => {
            return (
              <Card
                key={index}
                item={cartItem}
                {...{ index, toggleModal, editCartItem }}
              />
            );
          })}
        </div>
      ) : (
        <div className="cart__empty">
          <h2>Your cart is currently empty</h2>
        </div>
      )}
    </section>
  );
};

export default CartList;
