import { useState, useEffect } from "react";

export const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const validInitial = initial > 0 ? Math.min(initial, stock) : 1;
  const [count, setCount] = useState(validInitial);

  // Ajustar el count si cambia el stock
  useEffect(() => {
    if (count > stock) setCount(stock);
    if (stock === 0) setCount(0);
  }, [stock]);

  const handleIncrement = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock}>
        +
      </button>
      <button onClick={() => stock > 0 && onAdd(count)} disabled={stock === 0}>
        Agregar al carrito
      </button>
      {stock === 0 && <p className="no-stock-msg">Producto sin stock ❌</p>}
    </div>
  );
};
