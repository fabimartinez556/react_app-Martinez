// App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import { Component } from "react";

// ErrorBoundary para atrapar errores
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return <h1 style={{textAlign:"center", marginTop:"2rem"}}>Algo salió mal 😱</h1>;
    return this.props.children;
  }
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer saludo="Mi tienda online" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer saludo="Productos filtrados por categoría" />}
            />
            <Route
              path="/product/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route
              path="*"
              element={
                <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
                  404 - Página no encontrada
                </h2>
              }
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
