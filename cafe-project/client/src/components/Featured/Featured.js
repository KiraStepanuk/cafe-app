import React from 'react';
import './Featured.css';
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";


import ps5 from './assets/playstation.svg';
import woman from './assets/woman.png';
import speaker from './assets/amazon-echo.svg';
import perfume from './assets/Perfume.svg';

const Featured = () => {
  return (
    <section className="featured-section">
      <div className="container">
        

        <div className="section-title-wrapper">
          <div className="red-block"></div>
          <span className="section-subtitle">Featured</span>
        </div>
        <h2 className="main-title">New Arrival</h2>


        <div className="arrival-grid">
          

          <div className="grid-item ps5-item">
            <div className="img-wrapper">
              <img src={ps5} alt="PS5" />
            </div>
            <div className="item-content">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>


          <div className="grid-item women-item">
            <div className="img-wrapper">
              <img src={woman} alt="Women's Collections" />
            </div>
            <div className="item-content">
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>

  
          <div className="grid-item speaker-item">
            <div className="img-wrapper">
              <img src={speaker} alt="Speakers" />
            </div>
            <div className="item-content">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>


          <div className="grid-item perfume-item">
            <div className="img-wrapper">
              <img src={perfume} alt="Perfume" />
            </div>
            <div className="item-content">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP</p>
              <button className="shop-now">Shop Now</button>
            </div>
          </div>

        </div>


        <div className="services-container">
          <div className="service-item">
            <div className="icon-circle">
              <div className="icon-inner"><TbTruckDelivery /></div>
            </div>
            <h3>FREE AND FAST DELIVERY</h3>
            <p>Free delivery for all orders over $140</p>
          </div>

          <div className="service-item">
            <div className="icon-circle">
              <div className="icon-inner"><RiCustomerService2Line /></div>
            </div>
            <h3>24/7 CUSTOMER SERVICE</h3>
            <p>Friendly 24/7 customer support</p>
          </div>

          <div className="service-item">
            <div className="icon-circle">
              <div className="icon-inner"><AiOutlineCheckCircle /></div>
            </div>
            <h3>MONEY BACK GUARANTEE</h3>
            <p>We return money within 30 days</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Featured;