import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext.jsx";
import { ItemCount } from "./ItemCount.jsx";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("El producto no existe en Firestore");
          setProduct(null);
        }
      } catch (error) {
        console.error("Error al obtener producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2 className="loading">Cargando detalle...</h2>;
  if (!product)
    return (
      <div className="no-product">
        <h3>Producto no encontrado</h3>
        <Link to="/" className="btn-back">Volver al inicio</Link>
      </div>
    );

  return (
    <div className="item-detail-container">
      <div className="detail-card">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.title || "Producto"}
          className="detail-image"
          onError={(e) => (e.target.src = "/placeholder.png")} // ❗ fallback
        />
        <div className="detail-info">
          <h2>{product.title || "Sin título"}</h2>
          <p className="detail-desc">{product.description || "Sin descripción"}</p>
          <p className="detail-price">${product.price != null ? product.price : "0"}</p>
          <p className="detail-stock">
            Stock disponible: {product.stock != null ? product.stock : "0"}
          </p>

          {product.stock > 0 ? (
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={(cantidad) => {
                addToCart(product, cantidad);
                setAdded(true);
                setTimeout(() => setAdded(false), 2000);
              }}
            />
          ) : (
            <p className="no-stock">Producto sin stock ❌</p>
          )}

          {added && <p className="added-msg">Producto agregado al carrito ✅</p>}

          <Link to="/" className="btn-back">Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
};
