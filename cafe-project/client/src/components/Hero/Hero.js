import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';


import arrowIcon from './assets/arrow-right.svg';
import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';
import banner4 from './assets/banner4.png';

const Hero = () => {

  const categories = [
    { name: "Woman’s Fashion", hasSub: true },
    { name: "Men’s Fashion", hasSub: true },
    { name: "Electronics", hasSub: false },
    { name: "Home & Lifestyle", hasSub: false },
    { name: "Medicine", hasSub: false },
    { name: "Sports & Outdoor", hasSub: false },
    { name: "Baby’s & Toys", hasSub: false },
    { name: "Groceries & Pets", hasSub: false },
    { name: "Health & Beauty", hasSub: false },
  ];


  const slides = [banner1, banner2, banner3, banner4];


  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-container">
      <aside className="hero-sidebar">
        <ul className="sidebar-list">
          {categories.map((cat, index) => (
            <li key={index} className="sidebar-item">
              <Link to={`/category/${index}`}>{cat.name}</Link>
              {cat.hasSub && <img src={arrowIcon} alt="" className="sidebar-arrow" />}
            </li>
          ))}
        </ul>
      </aside>

      <div className="hero-divider"></div>

      <div className="hero-slider">
        <div 
          className="slider-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;