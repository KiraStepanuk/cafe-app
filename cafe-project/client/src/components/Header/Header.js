import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


import logo from './assets/logo.svg'; //К. потом заменю на текст
import searchIcon from './assets/icon-search.svg';
import heartIcon from './assets/icon-heart.svg';
import cartIcon from './assets/icon-cart.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="Exclusive Logo" />
          </NavLink>
        </div>

        <nav className="nav">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="What are you looking for?" />
            <img src={searchIcon} alt="Search" className="search-icon-img" />
          </div>
          
          <div className="icons">
            <img src={heartIcon} alt="Wishlist" className="header-icon" />
            <img src={cartIcon} alt="Cart" className="header-icon" />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;