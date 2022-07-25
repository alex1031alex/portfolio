import "./Work.css";
import React from "react";

export const Work = ({work}) => {
  return (
    <div className="work">
      <a href={work.link} title="go to repository">
        <h3 className="work__title">{work.name}</h3>
        <p className="work__image-container">
          {work.image && <img src={work.image} alt="" />}
        </p>
      </a>
      <div className="work__icon-container">
        {work.langs.map((it, index) => {
          if (index > 2) {
            return null;
          }
          return <div key={`$work.id-${it}`}>
            <img src={`/img/icons/${it}.svg`} alt={`icon${it}`}/>
          </div>;
        })}
        <p className="work__year">{work.year}</p>
      </div>
    </div>
  );
};