import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ExploreProducts.css';
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const ExploreProducts = () => {
  const products = [
    { id: 1, name: "Videocard", price: 100, reviews: 35, image: "/images/products/videocard.png" },
    { id: 2, name: "CANON EOS DSLR Camera", price: 360, reviews: 95, image: "/images/products/camera.png" },
    { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, reviews: 325, image: "/images/products/laptop.png" },
    { id: 4, name: "Gaming Pc", price: 500, reviews: 145, image: "/images/products/gamingpc.png" },
    { id: 5, name: "jbl-speaker", price: 960, reviews: 65, image: "/images/products/bl-speaker.png", isNew: true, colors: ["#FB1314", "#DB4444"] },
    { id: 6, name: "MSI-Infinite", price: 1160, reviews: 35, image: "/images/products/MSI-Infinite.png", colors: ["#EEFF61", "#DB4444"] },
    { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, reviews: 55, image: "/images/products/gamepad-black.png", isNew: true, colors: ["#000000", "#DB4444"] },
    { id: 8, name: "geforce-rtx", price: 660, reviews: 55, image: "/images/products/geforce-rtx.png", colors: ["#184A48", "#DB4444"] },
  ];

  return (
    <section className="explore-section">
      <div className="container">
        
        <div className="section-title-wrapper">
          <div className="red-block"></div>
          <span className="section-subtitle">Our Products</span>
        </div>

        <div className="explore-header">
          <h2 className="section-main-title">Explore Our Products</h2>
          <div className="slider-arrows">
            <button className="arrow-btn"><IoArrowBackOutline /></button>
            <button className="arrow-btn"><IoArrowForwardOutline /></button>
          </div>
        </div>

        <div className="explore-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-red-btn">View All Products</button>
        </div>

      </div>
    </section>
  );
};

export default ExploreProducts;