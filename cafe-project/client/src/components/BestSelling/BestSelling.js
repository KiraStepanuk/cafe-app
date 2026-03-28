import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './BestSelling.css';

const BestSelling = () => {

  const bestProducts = [
    { 
      id: 10, 
      name: "The north coat", 
      price: 260, 
      oldPrice: 360, 
      reviews: 65, 
      image: "/images/products/coat.png" 
    },
    { 
      id: 11, 
      name: "Gucci duffle bag", 
      price: 960, 
      oldPrice: 1160, 
      reviews: 65, 
      image: "/images/products/bag.png" 
    },
    { 
      id: 12, 
      name: "RGB liquid CPU Cooler", 
      price: 160, 
      oldPrice: 170, 
      reviews: 65, 
      image: "/images/products/cooler.png" 
    },
    { 
      id: 13, 
      name: "Small BookSelf", 
      price: 360, 
      oldPrice: null, 
      reviews: 65, 
      image: "/images/products/shelf.png" 
    },
  ];

  return (
    <section className="best-selling-section">
      <div className="container">

        <div className="section-title-wrapper">
          <div className="red-block"></div>
          <span className="section-subtitle">This Month</span>
        </div>

        <div className="best-selling-header">
          <h2 className="section-main-title">Best Selling Products</h2>
          <button className="view-all-red-btn">View All</button>
        </div>

        <div className="best-selling-grid">
          {bestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSelling;