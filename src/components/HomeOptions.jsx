import React from "react";

function HomeOptions() {
  return (
    <div className="options">
      <div className="option__card option__card-1">
        <a href="/option/men">
          <img src="/img/men-option.png" alt="men-option" />
          <button className="option__button">
            Our Men Collection
          </button>
        </a>
      </div>
      <div className="option__card option__card-2">
        <a href="/option/women">
          <img src="/img/women-option.png" alt="men-option" />
          <button className="option__button">
            Our Women Collection
          </button>
        </a>
      </div>
      <div className="option__card option__card-3">
        <a href="/option/kids">
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
