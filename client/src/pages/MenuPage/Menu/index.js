import Product from "../Product";

import "./style.scss";

const Menu = ({ menuData, toggleModal, clickedMenuItem }) => {
  return (
    <div className="menu-container">
      {menuData.map((category, index) => (
        <div
          key={index}
          data-category={category.name}
          className="menu-category"
        >
          <h2>{category.name.toUpperCase()}</h2>
          <div className="category-items">
            {category.products.map(
              (product) =>
                product.inStock && (
                  <Product
                    key={product._id}
                    productInfo={product}
                    toggleModal={toggleModal}
                    handleClick={clickedMenuItem}
                  />
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
