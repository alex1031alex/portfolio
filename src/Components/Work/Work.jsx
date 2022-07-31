import "./Work.css";
import React from "react";

export const Work = ({work}) => {
  const {name,link, site, image, langs, year} = work;
  return (
    <div className="work">
      <div className="work__buttons">
        {link && <a href={link} rel="noreferrer" target="_blank" className="work__btn work__btn--github">To Github</a>}
        {site && <a href={site} rel="noreferrer" target="_blank" className="work__btn work__btn--website">To Website</a>}
      </div>
        <h3 className="work__title">{name}</h3>
        <p className="work__image-container">
          {image && <img src={image} alt="" />}
        </p>
      <div className="work__icon-container">
        {langs.map((it, index) => {
          if (index > 2) {
            return null;
          }
          return <div key={`$work.id-${it}`}>
            <img src={`/img/icons/${it.toLowerCase()}.svg`} alt={`icon${it}`}/>
          </div>;
        })}
        <p className="work__year">{year}</p>
      </div>
    </div>
  );
};