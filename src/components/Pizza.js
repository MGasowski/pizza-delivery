const Pizza = ({ pizza }) => {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt=""
        className="img-fluid"
        style={{ height: 200, width: 200 }}
      />

      <div className="flex-container">
        <div className="w-100">
          <p>Variants:</p>
          <select>
            {pizza.varients.map((variant) => {
              return (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quantity:</p>
          <select>
            {[...Array(10).keys()].map((value, index) => {
              return (
                <option key={index} value={value + 1}>
                  {value + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
