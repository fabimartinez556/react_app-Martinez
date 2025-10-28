import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./CartWidget.css";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  const totalItems = getTotalItems();

  return (
    <div className="cart-widget-container">
      <Link to="/cart" className="cart-widget-link">
        🛒 <span className="cart-count">{totalItems}</span>
      </Link>
    </div>
  );
};
