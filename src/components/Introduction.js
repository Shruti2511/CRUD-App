// src/components/Introduction.js
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Introduction.css";
import { UserContext } from "../UserContext";
import man from "../assets/man.png";

const Introduction = ({
  text = "Alright, I'll be your guide through this software!",
  moreText = "Let's start by entering your name",
  extraText,
  buttonText = "LOOK'S GOOD",
  showInput = true,
  nextRoute = "/intro",
}) => {
  const [animate, setAnimate] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);
  const { name, setName } = useContext(UserContext);

  useEffect(() => {
    setAnimate(false); // Reset animation when text changes
    const timer1 = setTimeout(() => {
      setAnimate(true);
    }, 2000); // 2 seconds

    const timer2 = setTimeout(() => {
      setShowMoreText(true);
    }, 4000); // 4 seconds

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className={`text ${animate ? "animate" : ""}`}>{text}</div>
        {showMoreText && (
          <div className="more-text">
            <div>{moreText}</div>
            {showInput && (
              <input
                type="text"
                placeholder="Enter your name here"
                value={name}
                onChange={handleInputChange}
              />
            )}
            <div>
              {extraText && <p>{extraText}</p>}
              <Link to={{ pathname: nextRoute, state: { name } }}>
                <button>{buttonText}</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <img src={man} className="img" />
    </>
  );
};

export default Introduction;
