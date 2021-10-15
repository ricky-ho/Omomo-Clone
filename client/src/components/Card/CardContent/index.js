import "./style.scss";

const CardContent = ({ index, item }) => {
  const { product, quantity } = item;

  return (
    <div className="details__content">
      <div>
        <input type="number" value={quantity} disabled />
        <div className="price">
          <span>Price:</span>
          <span>{`$${product.price.toFixed(2)}`}</span>
        </div>
      </div>

      <ul>
        {Object.keys(item.modifications).map((group, index) => {
          const selection = item.modifications[group];

          if (Array.isArray(selection)) {
            return selection.map((opt, index) => {
              return (
                <li key={index} data-group={group}>
                  <span>{`${opt.label} (+$${opt.price.toFixed(2)})`}</span>
                </li>
              );
            });
          }

          return (
            <li key={index} data-group={group}>
              <span>{selection.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardContent;
