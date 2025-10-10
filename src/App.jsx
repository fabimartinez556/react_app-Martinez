
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<ItemListContainer saludo="Mi tienda online" />} />

        {/* Filtrado por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer saludo="Productos filtrados por categoría" />}
        />

        {/* Detalle de producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        {/* Ruta 404 */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
              404 - Página no encontrada
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
