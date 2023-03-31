import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero container-fluid mt-4 shadow-lg">
      <div className="hero-container p-4">
        <div className="hero-left">
          <p className="">hello, I'm Anonsa aka Designer X</p>
          <h1>I'm a UI/UX Developer</h1>
          <div className="d-flex gap-2 hero-button">
            <button className="btn btn-outline-primary">Portfolio</button>
            <button className="btn btn-outline-primary">Message</button>
          </div>
        </div>
        <div className="hero-right m-auto">
          <div className="img-container">
            <img src="./NYC.png" alt="" className="img-fluid hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
