import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext"; // asegurate de la ruta

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useContext(CartContext);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    addToCart(product, count);
    setCount(initial); // opcional: resetear contador a inicial
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={increment}>+</button>
      <button style={{ marginLeft: "1rem" }} onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
