import "./styles.css";

const Checkbox = ({ id, optionGroup, handleOptionsChange }) => {
  const { name, label, limit, opts } = optionGroup;

  return (
    <section className="form-group">
      <div className="form-group-header">
        <h2>{label}</h2>
        {!limit ? <p>Select all that apply</p> : null}
      </div>
      <div className="flex-col">
        {opts.map((opt, index) => {
          return (
            <label
              className="option-label"
              htmlFor={`${name}-${index}`}
              key={index}
            >
              <div>
                <input
                  id={`${name}-${index}`}
                  className="option-input"
                  type="checkbox"
                  value={index}
                  onChange={() => handleOptionsChange(id, limit, index)}
                  checked={opt.selected ? true : false}
                />
                <span>{opt.label}</span>
              </div>
              <div>
                <p>{opt.price ? `+ $${opt.price.toFixed(2)}` : null}</p>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default Checkbox;
