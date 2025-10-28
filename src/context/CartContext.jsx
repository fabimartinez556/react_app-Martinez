import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔹 Recuperar carrito desde localStorage al iniciar
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cart"));
      if (storedCart) setCart(storedCart);
    } catch (error) {
      console.error("Error leyendo el carrito del localStorage", error);
      setCart([]);
    }
  }, []);

  // 🔹 Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔹 Agregar producto con validación de stock
  const addToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        const newQuantity = Math.min(existing.quantity + quantity, product.stock);
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      } else {
        return [...prev, { ...product, quantity: Math.min(quantity, product.stock) }];
      }
    });
  };

  // 🔹 Eliminar producto
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 🔹 Vaciar carrito
  const clearCart = () => setCart([]);

  // 🔹 Saber si un producto está en el carrito
  const isInCart = (id) => cart.some((item) => item.id === id);

  // 🔹 Total de unidades en el carrito
  const getTotalItems = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  // 🔹 Total en $ del carrito
  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        isInCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
