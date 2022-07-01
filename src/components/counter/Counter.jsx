import "./counter.css";

function Counter({ quantity, setQuantity }) {
  function increaseOne() {
    setQuantity(parseInt(quantity) + 1);
  }

  function decreaseOne() {
    setQuantity(quantity - 1);
    if (quantity < 2) {
      setQuantity(1);
    }
  }

  return (
    <>
      <input
        value={quantity}
        onChange={(event) => setQuantity(event.target.value)}
      />
      <div className="buttons-container">
        <button className="count-buttons" type="button" onClick={increaseOne}>
          +
        </button>
        <button className="count-buttons" type="button" onClick={decreaseOne}>
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
