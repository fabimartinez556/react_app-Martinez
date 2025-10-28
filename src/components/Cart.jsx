import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ onClose }) => {
  const { cart, removeItem, clearCart, getTotalPrice } = useContext(CartContext);

  const total = getTotalPrice();

  const handleClose = onClose || (() => {});

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>
        <h2>Tu carrito</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Tu carrito está vacío 🛒</p>
            <Link to="/" className="go-shop" onClick={handleClose}>
              Ir al catálogo
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image || "/placeholder.png"} alt={item.title || "Producto"} />
                  <div>
                    <h3>{item.title || "Sin título"}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.price != null ? item.price * item.quantity : 0}</p>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Total: ${total}</h3>

            <div className="cart-actions">
              <button onClick={clearCart} disabled={cart.length === 0}>
                Vaciar carrito
              </button>
              <Link to="/checkout" className="checkout-btn" onClick={handleClose}>
                Finalizar compra
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
