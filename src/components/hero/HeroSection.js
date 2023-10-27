import React from 'react';
import addidas from './addidas.png';
import nike from './nike.png';
import puma from './puma.png';
import './HeroSection.css'
export default function HeroSection() {
  const shoeData = [
    { brand: 'Puma', description: 'Upgrade Your Style with Puma Shoes', image: puma },
    { brand: 'Addidas', description: 'Explore Premium Adidas Collections', image: addidas },
    { brand: 'Nike', description: 'Discover the Latest Nike Trends', image: nike },
  ];

  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide  p-5 my-2" style={{ height: '100%' }} data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner" >
          {shoeData.map((shoe, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''} px-5 `}  >
              <div className="d-flex align-items-center"  >
                <img src={shoe.image} className="d-block w-80" alt="..."   />
                <div className="m-9">
                  <h1 className="text-light ">{shoe.brand}</h1>
                  <p className="text-light">{shoe.description}</p>
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" ariahidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
    </>
  );
}
