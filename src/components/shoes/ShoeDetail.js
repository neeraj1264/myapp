import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Shoesdata from './Shoesdata';

const ShoeDetail = () => {
  const { id } = useParams();
  const shoe = Shoesdata.find((shoe) => shoe.id === parseInt(id, 10));

  const location = useLocation();
  const { image } = location.state;

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  if (!shoe) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <div className="shoe-detail">
        <img src={image} alt={shoe.brand} />
        <div className='content'>
          <h3 className='detail-brand'>{shoe.brand}</h3>
          <h3 className='detail-type'>{shoe.type}</h3>
          <h6 className='detail-special'>Special Price</h6>
          <h3 className='detail-price'>
          ₹{shoe.price}
            <span className="detail-mrp">₹{shoe.mrp}</span> 
            <span className="detail-discount">
              {((shoe.mrp - shoe.price) / shoe.mrp * 100).toFixed(1)}% off
            </span>
          </h3>
          <div className="size-options">
            <h3>Select Size: </h3>
            {["6", "7", "8", "9", "10"].map((size) => (
              <label className='size-lable' key={size}>
                <input
                  type="checkbox"
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeToggle(size)}
                />
                {size}
              </label>
            ))}
          </div>
          <button className="add-btn">
            <i className="fas fa-shopping-cart"></i> Add to Cart
          </button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default ShoeDetail;
