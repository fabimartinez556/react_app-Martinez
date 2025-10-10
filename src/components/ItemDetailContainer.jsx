import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(itemId));
        setProduct(found);
      })
      .catch((error) => console.log(error));
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
