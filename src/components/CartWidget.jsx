import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartWidget.css";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // cantidad total de items en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget">
      🛒 <span>{totalItems}</span>
    </div>
  );
};
