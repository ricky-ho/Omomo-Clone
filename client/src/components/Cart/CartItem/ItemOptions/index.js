import "./style.css";

const ItemOptions = ({ item }) => {
  return (
    <>
      <div id="product-options">
        {item.options.map((optionGroup, index) => {
          return optionGroup.length ? (
            <ul key={index}>
              {optionGroup.map((opt, i) => {
                return (
                  <li key={i}>
                    <p className="label">{opt.label}</p>
                    <p className="price">
                      {opt.price ? `(+ $${opt.price.toFixed(2)})` : ""}
                    </p>
                  </li>
                );
              })}
            </ul>
          ) : null;
        })}
      </div>
    </>
  );
};

export default ItemOptions;
