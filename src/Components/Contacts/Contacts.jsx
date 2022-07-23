import "./Contacts.css";
import React from "react";

export const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="contacts__title">Contacts</h2>
        <div className="contacts__content-wrapper">
          <div>
            <span className="contacts__label">Phone:</span>
            <a className="contacts__link contacts__link--tel" href="tel:+375259471783">+375 25 947-17-83</a>
          </div>
          <div>
            <span className="contacts__label">E-mail:</span>
            <a className="contacts__link contacts__link--email" href="mailto:alex1031alex@yahoo.com">alex1031alex@yahoo.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};