import ItemCount from "./ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <ItemCount stock={product.stock} initial={1} product={product} />
    </div>
  );
};

export default ItemDetail;
