import "./Header.css";
import React from "react";
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header id="home" className="header">
      <div className="container header__container">
        <Navigation />
      </div>
    </header>
  );
};