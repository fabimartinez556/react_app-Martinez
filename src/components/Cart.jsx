import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = ({ onClose }) => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  // calcular total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Tu carrito</h2>

        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
