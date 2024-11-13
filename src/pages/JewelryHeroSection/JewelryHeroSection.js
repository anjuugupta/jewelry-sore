import React from 'react';
import './JewelryHeroSection.css';
import centerImage from '../../assets/images/products/pendants/braceletswomenfour.jpg';
import image1 from '../../assets/images/products/pendants/chainwomenfour.jpg';
import image2 from '../../assets/images/products/pendants/nosepinthree.jpg';
import image3 from '../../assets/images/products/pendants/pendantone.jpg';

const JewelryHeroSection = () => {
  return (
    <div className="jewelry-hero-section">
      <h1 className="hero-heading">
        DISC<span className="image-letter"><img src={centerImage} alt="Jewelry" /></span>VER 
        <br /> WORLD’S BEST JEWELRY
        <span className="asterisk">*</span>
      </h1>

      <div className="image-gallery">
        <div className="image-item small-image">
          <img src={image1} alt="Earrings" />
          <a href="#" className="shop-now">Shop Now →</a>
        </div>
        <div className="image-item large-image">
          <img src={image2} alt="Necklace" />
        </div>
        <div className="image-item small-image">
          <img src={image3} alt="Ring" />
        </div>
      </div>

      <div className="circular-text">World's Best Jewelry Brand</div>
    </div>
  );
};

export default JewelryHeroSection;
