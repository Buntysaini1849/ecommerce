import React, { useState } from 'react';
import "../../Css/ProductView.css";

const RatingStars = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
  
   
      <div style={{marginTop:"-6px"}}>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(index)}
          >
            &#9733;
          </span>
        ))}
      </div>

  );
};

export default RatingStars;
