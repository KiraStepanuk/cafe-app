import React, { useRef } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './FlashSales.css';
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const mockProducts = [
  { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, reviews: 88, image: "/images/products/Gamepad.png"  },
  { id: 2, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, reviews: 75, image: "/images/products/keybord.png"  },
  { id: 3, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, reviews: 99, image: "/images/products/monitor.png"  },
  { id: 4, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, reviews: 99, image: "/images/products/gamingchair.png"  },
  { id: 5, name: "Some Extra Product", price: 100, oldPrice: null, discount: 10, reviews: 12, image: "/images/products/GamingController.png"  },
];

const FlashSales = () => {

  const sliderRef = useRef(null);

  
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="flash-sales-section">
      <div className="container">
        

        <div className="section-title-wrapper">
          <div className="red-block"></div>
          <span className="section-subtitle">Today's</span>
        </div>


        <div className="flash-header">
          <div className="header-left">
            <h2 className="section-title">Flash Sales</h2>
            

            <div className="timer">
              <div className="time-block">
                <span className="time-label">Days</span>
                <span className="time-value">03</span>
              </div>
              <span className="colon">:</span>
              <div className="time-block">
                <span className="time-label">Hours</span>
                <span className="time-value">23</span>
              </div>
              <span className="colon">:</span>
              <div className="time-block">
                <span className="time-label">Minutes</span>
                <span className="time-value">19</span>
              </div>
              <span className="colon">:</span>
              <div className="time-block">
                <span className="time-label">Seconds</span>
                <span className="time-value">56</span>
              </div>
            </div>
          </div>


          <div className="slider-arrows">
            <button className="arrow-btn" onClick={() => scroll('left')}><IoArrowBackOutline /></button>
            <button className="arrow-btn" onClick={() => scroll('right')}><IoArrowForwardOutline /></button>
          </div>
        </div>


        <div className="products-slider" ref={sliderRef}>
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Products</button>
        </div>

      </div>
    </section>
  );
};

export default FlashSales;