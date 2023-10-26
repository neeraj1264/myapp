import React from 'react';
import Shoesdata from './Shoesdata';
import './ShoesSection.css'
const ShoesSection = () => {
  return (
    <div className="shoes-section">
      {Shoesdata.map((shoe) => (
        <div className="shoe-card" key={shoe.id}>
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>{shoe.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoesSection;
