import React from 'react';
import FuniroImageCard from './FuniroImageCard';


import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

const FuniroImageGrid = () => {
  const images = [
    { src: img1, alt: "Shelf with plants" },
    { src: img2, alt: "Workspace with laptop" },
    { src: img3, alt: "Dining room" },
    { src: img4, alt: "Bedroom" },
    { src: img5, alt: "Dining table" },
    { src: img6, alt: "Vintage chair" },
    { src: img7, alt: "Side table with vase" },
    { src: img8, alt: "Kitchen shelf" },
  ];

  return (
    <div className="funiro-image-grid">
      {images.map((image, index) => (
        <FuniroImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default FuniroImageGrid;