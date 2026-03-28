import React from 'react';
import './Footer.css';
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

import qrCode from './assets/QrCode.svg';
import googlePlay from './assets/GooglePlay.svg';
import appStore from './assets/appstore.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h3 className="footer-logo">Exclusive</h3>
          <h4 className="footer-title">Subscribe</h4>
          <p className="footer-text">Get 10% off your first order</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Enter your email" />
            <button className="send-btn">
              <VscSend />
            </button>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Support</h4>
          <p className="footer-text">111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
          <p className="footer-text">exclusive@gmail.com</p>
          <p className="footer-text">+88015-88888-9999</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Account</h4>
          <ul className="footer-links">
            <li><a href="/account">My Account</a></li>
            <li><a href="/login">Login / Register</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Quick Link</h4>
          <ul className="footer-links">
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms Of Use</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Download App</h4>
          <p className="footer-subtext">Save $3 with App New User Only</p>
          <div className="download-container">
            <div className="qr-code">
              <img src={qrCode} alt="QR Code" />
            </div>
            <div className="app-stores">
              <img src={googlePlay} alt="Google Play" />
              <img src={appStore} alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><RiFacebookLine /></a>
            <a href="#"><RiTwitterLine /></a>
            <a href="#"><RiInstagramLine /></a>
            <a href="#"><RiLinkedinLine /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;