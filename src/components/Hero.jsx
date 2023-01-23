import React, { useState } from "react";
import "../assets/scss/HomePage.scss";

function HomePage() {
  return (
    <div className="hero">
      <a href="/">
        <img
          src="/img/hero-header.png"
          alt="hero-header"
          className="hero__header"
        />
      </a>
      <div>
        <div className="img-container">
          <a href="/">
            <img
              src="/img/hero-header-2.png"
              alt="hero-header-2"
              className="hero__header hero__header-2"
            />
            <div className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, nostrum.
            </div>
          </a>
        </div>
        <div className="img-container">
          <a href="/">
            <img
              src="/img/hero-header-3.png"
              alt="hero-header-3"
              className="hero__header hero__header-3"
            />
            <div className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, nostrum.
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
