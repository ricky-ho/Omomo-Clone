import "./style.scss";

const MenuItem = ({ item, toggleModal, handleClick }) => {
  return (
    <div className="menu-item">
      <img
        src={item.imageURL}
        alt={item.name}
        // onClick={() => {
        //   toggleModal();
        //   handleClick(item);
        // }}
        // role="button"
      />
      <div className="menu-item__info">
        <p className="item__name">{item.name}</p>
        <p className="item__price">{item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
