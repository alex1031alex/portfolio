import "./Header.css";
import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navigation header__navigation">
          <div className="logo header__logo">
            <img className="logo__image" src="./logo.png" width="84" height="63" alt="alex logo"/>
          </div>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#home" className="header__link">Home</a>
            </li>
            <li className="header__menu-item">
              <a href="#about" className="header__link">About</a>
            </li>
            <li className="header__menu-item">
              <a href="#works" className="header__link">Works</a>
            </li>
            <li className="header__menu-item">
              <a href="#contacts" className="header__link">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};