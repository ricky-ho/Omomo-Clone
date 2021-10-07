import "./style.scss";

const Card = ({ item }) => {
  const { product, quantity } = item;
  return (
    <div className="card">
      <div className="card__image">
        <img src={product.imageURL} alt={product.name} />
      </div>
      <div className="card__details">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default Card;
