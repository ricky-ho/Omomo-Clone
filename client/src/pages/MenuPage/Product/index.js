import "./style.scss";

const Product = ({ productInfo, toggleModal, handleClick }) => {
  return (
    <div className="menu-item">
      <img
        src={productInfo.imageURL}
        alt={productInfo.name}
        onClick={() => {
          toggleModal();
          handleClick(productInfo);
        }}
        role="button"
      />
      <div className="menu-item__info">
        <p className="item__name">{productInfo.name}</p>
        <p className="item__price">{productInfo.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
