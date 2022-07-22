import "./Navigation.css";
import React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo navigation__logo">
        <Link to="/">
          <img className="logo__image" src="/img/logo.png" width="84" height="63" alt="alex logo"/>
        </Link>
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className="navigation__link">About</Link>
        </li>
        <li className="navigation__item">
          <Link to="/works" className="navigation__link">Works</Link>
        </li>
        <li className="navigation__item">
          <Link to="/contacts" className="navigation__link">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};