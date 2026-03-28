import React from 'react';
import './MusicBanner.css';

import speakerImg from './assets/jbl-speaker.png'; 

const MusicBanner = () => {
  return (
    <section className="music-banner">
      <div className="container music-banner-container">
        
  
        <div className="banner-text-content">
          <span className="banner-category">Categories</span>
          <h2 className="banner-title">Enhance Your <br /> Music Experience</h2>
          
          {/* Круглый таймер */}
          <div className="banner-timer">
            <div className="timer-circle">
              <span className="time-val">23</span>
              <span className="time-unit">Hours</span>
            </div>
            <div className="timer-circle">
              <span className="time-val">05</span>
              <span className="time-unit">Days</span>
            </div>
            <div className="timer-circle">
              <span className="time-val">59</span>
              <span className="time-unit">Minutes</span>
            </div>
            <div className="timer-circle">
              <span className="time-val">35</span>
              <span className="time-unit">Seconds</span>
            </div>
          </div>

          <button className="buy-now-green-btn">Buy Now!</button>
        </div>

        <div className="banner-image-content">
          <div className="white-glow"></div>
          <img src={speakerImg} alt="JBL Speaker" className="speaker-img" />
        </div>

      </div>
    </section>
  );
};

export default MusicBanner;