import MenuItem from "../MenuItem";

import "./style.scss";

const Menu = ({ menuData }) => {
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
                  <MenuItem
                    key={product._id}
                    item={product}
                    // toggleModal={toggleModal}
                    // handleClick={clickedMenuItem}
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
