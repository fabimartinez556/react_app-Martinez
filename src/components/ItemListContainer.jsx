import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const productsRef = collection(db, "productos");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error al traer productos:", err);
        setError("No se pudieron cargar los productos. Intenta más tarde.");
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2 className="loading">Cargando productos...</h2>;
  if (error) return <h3 className="error">{error}</h3>;
  if (products.length === 0)
    return <h3 className="no-products">No hay productos en esta categoría</h3>;

  return (
    <div className="item-list-container">
      <h1>{saludo}</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img
              src={p.image || "/placeholder.png"}
              alt={p.title || "Producto"}
              onError={(e) => (e.target.src = "/placeholder.png")}
            />
            <h2>{p.title || "Sin título"}</h2>
            <p>${p.price != null ? p.price : "0"}</p>
            <Link to={`/product/${p.id}`} className="btn-detail">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
