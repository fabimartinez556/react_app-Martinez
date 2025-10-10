import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";
import "./CartWidget.css";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget-container">
      <div className="cart-widget" onClick={() => setShowCart(true)}>
        🛒 <span>{totalItems}</span>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  );
};
