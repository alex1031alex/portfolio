import "./Navigation.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Logo} from "../Logo/Logo";

export const Navigation = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onBurgerClick = () => {
    setIsBurgerOpen(true);
  };

  const onCloseButtonClick = () => {
    setIsBurgerOpen(false);
  };

  const onLinkClick = () => {
      if (isBurgerOpen) {
        setIsBurgerOpen(false);
      }
  };

  return (
    <nav className="navigation">
      <Link className="navigaton-logo-link" to="/" onClick={onLinkClick}>
        <Logo />
      </Link>
      <div className={`navigation__burger ${isBurgerOpen && "close"}`} onClick={onBurgerClick}>
        <div className="navigation__burger-item"/>
        <div className="navigation__burger-item"/>
        <div className="navigation__burger-item"/>
      </div>
      <button className={`navigation__close-btn ${isBurgerOpen && "open" }`} onClick={onCloseButtonClick}>
        <span className="visually-hidden">Close menu</span>
      </button>
      <ul className={`navigation__list ${isBurgerOpen && "open"}`}>
        <li className="navigation__item">
          <Link to="/" className="navigation__link" onClick={onLinkClick}>Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/about" className="navigation__link" onClick={onLinkClick}>About</Link>
        </li>
        <li className="navigation__item">
          <Link to="/works" className="navigation__link" onClick={onLinkClick}>Works</Link>
        </li>
        <li className="navigation__item">
          <Link to="/contacts" className="navigation__link" onClick={onLinkClick}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};