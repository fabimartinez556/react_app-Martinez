import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const increase = () => { if(count < stock) setCount(count + 1); };
  const decrease = () => { if(count > 1) setCount(count - 1); };
  const handleAdd = () => alert(`Agregaste ${count} producto(s) al carrito`);

  return (
    <div className="item-count">
      <div className="item-count-buttons">
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={handleAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
