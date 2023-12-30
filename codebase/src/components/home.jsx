import React, { useState, useEffect } from 'react';
import './Styles/home.css'; // Create this CSS file for styling

import backgroundImage1 from './img/image1.jpg';
import backgroundImage2 from './img/image2.jpg';
import backgroundImage3 from './img/image3.jpg';
import backgroundImage4 from './img/image4.jpg';
import backgroundImage5 from './img/image5.jpg';

const images = [backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home" >
      {images.map((image, index) => (
        <div
          key={index}
          className={`background-image ${currentImageIndex === index ? 'show' : ''}`}
          style={{ backgroundImage: `url(${image})` }}>
          <div className="overlay">
            <h3>The TiC Foundation</h3>
            <br />
            <h5>Your inspirational tagline here</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
