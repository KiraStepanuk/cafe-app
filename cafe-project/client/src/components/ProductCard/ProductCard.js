
import './ProductCard.css';
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">

      <div className="product-image-container">

        {product.discount && <div className="discount-badge">-{product.discount}%</div>}
        
        <div className="product-actions">
          <button className="action-btn"><IoHeartOutline /></button>
          <button className="action-btn"><IoEyeOutline /></button>
        </div>

        <img src={product.image} alt={product.name} className="product-image" />
        <button className="add-to-cart-btn">Add To Cart</button>
      </div>


      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-prices">
          <span className="current-price">${product.price}</span>
          {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
        </div>

        <div className="product-rating">
          <span className="stars">★★★★★</span>
          <span className="reviews-count">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;