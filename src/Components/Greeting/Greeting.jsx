import "./Greeting.css";
import React from "react";

export const Greeting = () => {
  return (
    <section id="greeting" className="greeting main__greeting">
      <div className="greeting__overlay"/>
      <div className="greeting__container container">
        <div className="greeting__column greeting__column--left">
          <p>
            <img className="greeting__image" src="/img/alex.png" alt="alex"/>
          </p>
        </div>
        <div className="greeting__column greeting__column--right">
          <h1 className="greeting__title">Hello! I'm Alexey Alexandrov, frontend-developer.<br/> Minsk, Belarus.</h1>
          <a href="mailto:alex1031alex@yahoo.com" className="greeting__btn">Hire me</a>
        </div>
      </div>
    </section>
  );
};