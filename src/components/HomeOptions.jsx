import React from "react";

function HomeOptions() {
  return (
    <div className="options">
      <div className="option__card option__card-1">
        <a href="/">
          <img src="/img/men-option.png" alt="men-option" />
          <button className="option__button">
            Our Men Collection
          </button>
        </a>
      </div>
      <div className="option__card option__card-2">
        <a href="/">
          <img src="/img/women-option.png" alt="men-option" />
          <button className="option__button">
            Our Women Collection
          </button>
        </a>
      </div>
      <div className="option__card option__card-3">
        <a href="/">
          <img src="/img/kids-option.png" alt="men-option" />
          <button className="option__button">
            Our Kids Collection
          </button>
        </a>
      </div>
    </div>
  );
}

export default HomeOptions;
