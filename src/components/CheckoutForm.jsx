import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { db } from "../firebaseConfig.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{7,15}$/;

    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Completa todos los campos");
      return;
    }
    if (!emailRegex.test(buyer.email)) {
      setError("Ingresa un email válido");
      return;
    }
    if (!phoneRegex.test(buyer.phone)) {
      setError("Ingresa un teléfono válido (solo números)");
      return;
    }

    setLoading(true);
    setError(null);

    const order = {
      buyer,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al generar la orden:", err);
      setError("Ocurrió un error al generar la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId)
    return (
      <div className="checkout-success">
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );

  return (
    <div className="checkout-form-container">
      <h2>Formulario de Checkout</h2>
      {error && <p className="error-msg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={buyer.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading || cart.length === 0}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
      {cart.length === 0 && <p>El carrito está vacío</p>}
    </div>
  );
};

export default CheckoutForm;
