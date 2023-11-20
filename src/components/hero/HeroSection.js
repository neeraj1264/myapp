import React from 'react';
import './HeroSection.css';
import puma from './puma_banner.png'
import ShoesSection from '../shoes/ShoesSection'

const shoeData = [

  {
    image: puma 
  },
  {
    image: puma 
  },
  {
    image: puma 
  },
];

export default function HeroSection() {
  return (
    <>
    <div id="heroCarousel" className="carousel slide " data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner">
        {shoeData.map((shoe, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''} px-5`}
          >
            <img
              src={shoe.image}
              className="d-block w-100"
              alt={shoe.brand}
            />
           
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <ShoesSection/>
    </>
  );
}
