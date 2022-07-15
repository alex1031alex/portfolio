import "./Navigation.css";
import React from "react";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo navigation__logo">
        <img className="logo__image" src="./img/logo.png" width="84" height="63" alt="alex logo"/>
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#home" className="navigation__link">Home</a>
        </li>
        <li className="navigation__item">
          <a href="#about" className="navigation__link">About</a>
        </li>
        <li className="navigation__item">
          <a href="#works" className="navigation__link">Works</a>
        </li>
        <li className="navigation__item">
          <a href="#contacts" className="navigation__link">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};