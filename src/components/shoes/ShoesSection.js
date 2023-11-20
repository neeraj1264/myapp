import React from 'react';
import { Link } from 'react-router-dom';
import Shoesdata from './Shoesdata';
import './ShoesSection.css';

const ShoesSection = () => {
  return (<>
    <div className='heading'>
<h3>Collections</h3>
      </div>
    <div className='shoes-section'>
      
      {Shoesdata.map((shoe) => (
        <Link to={`/${shoe.id}`} key={shoe.id} state={{ image: shoe.image }}>
          <div className="shoe-card">
            <img src={shoe.image} alt={shoe.brand} />
            <h6>{shoe.brand}</h6>
            <h6>{shoe.type}</h6>
            <p>
              ₹{shoe.price}
              <span className="mrp">₹{shoe.mrp}</span> 
              <span className="discount">
              {((shoe.mrp - shoe.price) / shoe.mrp * 100).toFixed(1)}% off
                </span>
                </p>
                <span className='deal'>Big Saving Deal</span>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default ShoesSection;
