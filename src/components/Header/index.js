import React, { useState } from "react";
import "./index.css";

import logo from "./logo.png";
import { FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className="header-left">
        <button className="quiz-btn">WHICH MANUKA IS FOR ME?</button>
        <nav className="nav-left">
          <a href="#shop">Shop</a>
          <a href="#explore">Explore</a>
        </nav>
      </div>

      <div className="header-center">
        <img src={logo} alt="New Zealand Honey Co." className="logo" />
      </div>

      <div className="header-right">
        <nav className={`nav-right ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#rewards">Rewards</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <div className="icons">
          <FiUser className="icon" />
          <FiSearch className="icon" />
          <div className="cart-wrapper">
            <FiShoppingCart className="icon" />
            <span className="cart-badge">0</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
