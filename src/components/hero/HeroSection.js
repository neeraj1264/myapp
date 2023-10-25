import React from 'react';
import './HeroSection.css'; 
import img from '../shoes/shoe.png'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover the Latest Trends</h1>
        <p>Shop Premium Fashion Collections</p>
        <a href="/shop" className="cta-button">Shop Now</a>
      </div>
      <div className="hero-image">
      <img src={img} alt="Fashion Model" />
      </div>
    </div>
  );
};

export default HeroSection;
