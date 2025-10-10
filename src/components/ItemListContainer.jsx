import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../data/products";
import "./ItemListContainer.css";

export const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setProducts(data.filter((p) => p.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{saludo}</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h2>{p.title}</h2>
            <p>${p.price}</p>
            <Link to={`/item/${p.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
