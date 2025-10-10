import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Mi tienda online" />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer saludo="Productos filtrados por categoría" />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={<h2 style={{ textAlign: "center", marginTop: "2rem" }}>404 - Página no encontrada</h2>}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
