import React from 'react';
import './FuniroImageCard.css';

const FuniroImageCard = ({ src, alt }) => {
  return (
    <div className="funiro-image-card">
      <img src={src} alt={alt} />
    </div>
  );
};

export default FuniroImageCard;