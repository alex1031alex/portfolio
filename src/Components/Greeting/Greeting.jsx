import "./Greeting.css";
import React from "react";

export const Greeting = () => {
  return (
    <section className="greeting main__greeting">
      <div className="greeting__container container">
        <div className="greeting__column greeting__column--left">
          <p>
            <img className="greeting__image" src="./alex.png" alt="alex photo"/>
          </p>
        </div>
        <div className="greeting__column greeting__column--right">
          <h1 className="greeting__title">Hello! I'm Alexey Alexandrov, frontend-developer.<br/> Minsk, Belarus</h1>
          <button className="greeting__btn">Hire me</button>
        </div>
      </div>
    </section>
  );
};