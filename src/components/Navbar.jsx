import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Navbar.scss";
import Aside from "./Aside";

function Navbar() {
  const [menuActive, setMenuActive] = useState("unactive");
  const [shoppingCartActive, setShoppingCartActive] = useState("unactive");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const menuHandler = () => {
    if (menuActive == "unactive") {
      setMenuActive("active");
    } else {
      setMenuActive("unactive");
    }
  };

  const shoppingCartHandler = (title) => {
    if (title == "unactive") {
      setShoppingCartActive("unactive");
    } else {
      if (shoppingCartActive == "unactive") {
        setShoppingCartActive("active");
      } else {
        setShoppingCartActive("unactive");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
      if (window.innerWidth >= 800) {
        setMenuActive("unactive");
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowSize(window.innerWidth);
        if (window.innerWidth >= 800) {
          setMenuActive("unactive");
        }
      });
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__brand">
          <Link
            to="/"
            onClick={() => {
              setMenuActive("unactive");
            }}
          >
            Kicks
          </Link>
        </div>
        <ul className={`navbar__list ${menuActive}`}>
          <li>
            <Link
              to="/option/men"
              onClick={() => {
                setMenuActive("unactive");
              }}
            >
              Men
            </Link>
          </li>
          <li>
            <Link
              to="/option/women"
              onClick={() => {
                setMenuActive("unactive");
              }}
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/option/kids"
              onClick={() => {
                setMenuActive("unactive");
              }}
            >
              Kids
            </Link>
          </li>
          <li>
            <a href="/shoppingcart"
              onClick={() => {
                setMenuActive("unactive");
                shoppingCartHandler();
              }}
              style={{ display: windowSize >= 800 ? "none" : "block" }}
            >
              Shoppingcart
            </a>
          </li>
        </ul>
        <button
          className={`navbar__icon hamburger-menu ${menuActive}`}
          style={{ display: windowSize >= 800 ? "none" : "block" }}
          onClick={menuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button
          className={`navbar__icon shoppingcart-icon ${shoppingCartActive}`}
          style={{ display: windowSize >= 800 ? "block" : "none" }}
          onClick={shoppingCartHandler}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </button>
      </nav>
      <Aside
        shoppingCartHandler={shoppingCartHandler}
        shoppingCartActive={shoppingCartActive}
      />
    </>
  );
}

export default Navbar;
