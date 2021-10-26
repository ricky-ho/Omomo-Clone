import "./style.scss";

const SummaryItem = ({ item }) => {
  return (
    <div className="summary-item">
      <div className="summary-item__header">
        <p>
          <span className="summary-item__quantity">{item.quantity}</span>
          <span>{item.product.name}</span>
        </p>
        <p>{`$${item.subtotal.toFixed(2)}`}</p>
      </div>
      <div className="summary-item__modifications">
        <ul>
          {Object.keys(item.modifications).map((group, index) => {
            const selection = item.modifications[group];

            if (Array.isArray(selection)) {
              return selection.map((opt, index) => {
                return (
                  <li key={index} data-group={group}>
                    <span>{opt.label}</span>
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
    </div>
  );
};

export default SummaryItem;
