import React, { useState } from "react";
import "./Footer.css";
import man from "../assets/man.png";

const Footer = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={man} className="footer-img" />
        <div className="footer-text">{texts[currentIndex]}</div>
        <div className="footer-arrows">
          <button onClick={handlePrevious}>←</button>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
